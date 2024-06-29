import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import startImage from "../../assets/images/home/truck.png";

const BusMotion = ({ refData }) => {
    // Motion states
    const [moveX, setMoveX] = useState(0);
    const [moveY, setMoveY] = useState(0);
    const [rotateAngel, setRotateAngel] = useState(0);

    // Ref to get parent container height for responsiveness
    const refForHeight = useRef(null);

    // ScrollProgress for bus movement and scrollY to check scroll direction
    const { scrollYProgress, scrollY } = useScroll({
        target: refData.refContainer,
        offset: ["start end", "end end"],
    });

    // Variables to check for scroll direction
    let isTopScroll = false;
    let prevScrollValue = 0;

    // For height adjustment due to image size
    let offSetHeight = 0;
    // Temp fix for 992px height
    let tempFixHeight = 0;

    // Constants Points of interest for while scrolling
    // Here 100 mean 10% while 1000 mean 100% scroll
    const Point_A = 200;
    const Point_B = 250;
    const Point_C = 350;
    const Point_D = 500;
    const Point_E = 700;
    const Point_F = 800;
    const Point_G = 900;
    const Point_H = 980;

    // Constants direction
    const LEFT_TURN = -90;
    const RIGHT_TURN = 90;
    const UP_DIRECTION = 180;
    const DOWN_DIRECTION = 0;

    useEffect(() => {
        // Check and set the scroll direction
        scrollY.onChange((currentScrollValue) => {
            // If mobile device, don't do anything
            if (window.innerWidth < 768) return;

            // Check and set the scroll direction
            if (currentScrollValue < prevScrollValue) isTopScroll = true;
            else if (currentScrollValue > prevScrollValue) isTopScroll = false;
            prevScrollValue = currentScrollValue;
        });

        // Update Movement coordinate based on scroll
        scrollYProgress.onChange((currentScrollValue) => {
            // Get height of the parent container for responsive movement along y-axis
            const height = parseInt(
                refForHeight.current.parentElement.offsetHeight
            );
            // If mobile device, don't do anything
            if (window.innerWidth < 768) return;

            // Calculate required height to travel each vertical motion
            const difference =
                refData.refDiv1.current.offsetTop -
                refForHeight.current.offsetTop -
                40;

            const difference2 =
                refData.refDiv2.current.offsetTop -
                refData.refDiv1.current.offsetTop +
                offSetHeight;

            const difference3 =
                refData.refDiv3.current.offsetTop -
                refData.refDiv2.current.offsetTop;

            const difference4 = parseInt(
                ((height - difference - difference2 - difference3) * 64.5) /
                    100 -
                    offSetHeight -
                    19
            );

            // Adjust offSet based on different heights
            if (window.innerWidth < 992) offSetHeight = 15;
            else if (window.innerWidth < 1200) offSetHeight = 5;
            else if (window.innerWidth < 1400) offSetHeight = -5;
            else offSetHeight = -13;

            //Temp fix height logic
            if (window.innerWidth < 992) tempFixHeight = 18;
            else tempFixHeight = 0;

            // Converts value in 1000 to 0 format from 1 to 0 format
            const scrollProgressValue = parseInt(currentScrollValue * 1000);

            // Start
            if (scrollProgressValue <= Point_A) {
                // Move and rotate
                setMoveY(-50);
                setMoveX(0);
                isTopScroll
                    ? setRotateAngel(UP_DIRECTION)
                    : setRotateAngel(DOWN_DIRECTION);

                // Point A to B
            } else if (
                scrollProgressValue > Point_A &&
                scrollProgressValue < Point_B
            ) {
                // Maths to find proper responsive height
                // Calculate Y
                const currentY = calculateY(
                    scrollProgressValue,
                    Point_A,
                    Point_B,
                    difference
                );

                // Move and rotate
                setMoveY(currentY - 50);
                setMoveX(0);
                isTopScroll
                    ? setRotateAngel(UP_DIRECTION)
                    : setRotateAngel(DOWN_DIRECTION);

                // Point B to C
            } else if (
                scrollProgressValue >= Point_B &&
                scrollProgressValue < Point_C
            ) {
                // Calculate X
                const currentX = calculateX(
                    scrollProgressValue,
                    Point_B,
                    Point_C
                );

                // Move and rotate
                setMoveX(`${currentX}%`);
                setMoveY(offSetHeight);
                isTopScroll
                    ? setRotateAngel(RIGHT_TURN)
                    : setRotateAngel(LEFT_TURN);

                // Point C to D
            } else if (
                scrollProgressValue >= Point_C &&
                scrollProgressValue < Point_D
            ) {
                // Calculate Y
                const currentY = calculateY(
                    scrollProgressValue,
                    Point_C,
                    Point_D,
                    difference2
                );

                //Move and rotate
                setMoveY(currentY);
                setMoveX("100%");
                isTopScroll
                    ? setRotateAngel(UP_DIRECTION)
                    : setRotateAngel(DOWN_DIRECTION);

                // Point D to E
            } else if (
                scrollProgressValue >= Point_D &&
                scrollProgressValue < Point_E
            ) {
                // Calculate X
                const currentX =
                    100 - calculateX(scrollProgressValue, Point_D, Point_E);

                // Move and Rotate
                setMoveX(`${currentX}%`);
                setMoveY(difference2);
                isTopScroll
                    ? setRotateAngel(LEFT_TURN)
                    : setRotateAngel(RIGHT_TURN);

                // Point E to F
            } else if (
                scrollProgressValue >= Point_E &&
                scrollProgressValue < Point_F
            ) {
                // Calculate Y
                const currentY = calculateY(
                    scrollProgressValue,
                    Point_E,
                    Point_F,
                    difference3
                );

                //Move and Rotate
                setMoveY(currentY + difference2);
                setMoveX(0);
                isTopScroll
                    ? setRotateAngel(UP_DIRECTION)
                    : setRotateAngel(DOWN_DIRECTION);

                // Point F to G
            } else if (
                scrollProgressValue >= Point_F &&
                scrollProgressValue < Point_G
            ) {
                // Calculate X
                const currentX = calculateX(
                    scrollProgressValue,
                    Point_F,
                    Point_G
                );

                // Move and rotate
                setMoveX(`${currentX}%`);
                setMoveY(difference3 + difference2);
                isTopScroll
                    ? setRotateAngel(RIGHT_TURN)
                    : setRotateAngel(LEFT_TURN);

                // Point G to H
            } else if (
                scrollProgressValue >= Point_G &&
                scrollProgressValue < Point_H
            ) {
                // Calculate Y
                const currentY = calculateY(
                    scrollProgressValue,
                    Point_G,
                    Point_H,
                    difference4
                );

                // Move and rotate
                setMoveY(currentY + difference2 + difference3 + tempFixHeight);
                setMoveX("100%");
                isTopScroll
                    ? setRotateAngel(UP_DIRECTION)
                    : setRotateAngel(DOWN_DIRECTION);

                // End
            } else {
                // Final Values
                setMoveX("100%");
                setMoveY(
                    difference4 + difference3 + difference2 + tempFixHeight
                );
                isTopScroll
                    ? setRotateAngel(UP_DIRECTION)
                    : setRotateAngel(DOWN_DIRECTION);
            }
        });
    }, []);

    // JSX
    return (
        <>
            <div
                className="row rowTop py-5 d-none d-lg-block"
                style={{ zIndex: 1 }}
                ref={refForHeight}
            >
                <motion.div
                    animate={{ x: moveX, y: moveY }}
                    transition={{ type: "tween", duration: 0 }}
                >
                    <motion.img
                        src={startImage}
                        style={{ width: "4%", left: "-2.2%", zIndex: 100 }}
                        alt="not found"
                        animate={{ rotateZ: rotateAngel }}
                        transition={{ type: "tween", duration: 0.1 }}
                    />
                </motion.div>
            </div>
        </>
    );
};

export default BusMotion;

function calculateY(progress, point_1, point_2, total) {
    return parseInt(
        ((((progress - point_1) * 100) / (point_2 - point_1)) * total) / 100
    );
}

function calculateX(progress, point_1, point_2) {
    return parseInt(((progress - point_1) * 100) / (point_2 - point_1));
}
