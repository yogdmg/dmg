<?php include('admin/config.php');

//upcoming event
$offset=$_POST['offset'];
if($_POST['str']==1){
$dataEU=$conn->query("select * from meetings where meeting_end_date>=CURDATE() order by meeting_start_date desc limit $offset,10");
$getupcoming=$dataEU->fetchAll();
}
else
{
$dataEU=$conn->query("select * from meetings where meeting_end_date<CURDATE() order by meeting_start_date desc limit $offset,10");
$getupcoming=$dataEU->fetchAll();
}




?>

    <?php 
    $u=1;
    foreach($getupcoming as $dataupcoming){ ?>
      <div class="single-events ">
        <div class="row">
            <div class="col-md-3"><div class="event-time event-time<?php echo $u;?> text-center"><p><?php echo date('d M Y',strtotime($dataupcoming['meeting_start_date'])); if(strtotime('0000-00-00')!=strtotime($dataupcoming['meeting_end_date'])){ ?> - <?php echo date('d M Y',strtotime($dataupcoming['meeting_end_date'])); } ?></p>
                <p class="evtime"><?php echo date('h:i A', strtotime($dataupcoming['meeting_start_time']));?> - <?php echo date('h:i A', strtotime($dataupcoming['meeting_end_time']));?></p></div></div>
            <div class="col-md-7"><div class="event-desc"><h4><a href="event-details.php?event=<?php echo $dataupcoming['meeting_id'];?>" class="text-blue"><?php echo $dataupcoming['meeting_name'];?></a></h4>
                <p class="director">Program director: <span><?php echo $dataupcoming['director'];?></span></p>
                <p class="mb-0"><?php echo substr(stripslashes($dataupcoming['meeting_details']),0,110);?>...</p></div></div>
            <div class="col-md-2"><div class="event-readmore"><p><a href="event-details.php?event=<?php echo $dataupcoming['meeting_id'];?>" class="readmore">Read More +</a></p></div></div>
        </div>
      </div>
  <?php $u++; } ?>    