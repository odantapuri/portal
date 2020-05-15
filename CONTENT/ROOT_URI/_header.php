
<style type="text/css">
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Global site tag (gtag.js) - Google Analytics -->


  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Muli:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="/assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet">
  <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="/assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <title>Odantapuri Classes</title>
  
</head>

<body>

  
  <!---=============Modal ========= -->

  <div class="modal fade" id="joinFreeClassesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="joinFreeClassesModalLabel">Enter details about yourself to enroll for a free class</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="test.php" method="post">
          <div class="modal-body">

            <div class="form-group">
              <input id="studentName" type="text" class="form-control" name="studentName" placeholder="Please enter your Name">
            </div>
            <div class="form-group">
              <input id="studentEmail" type="text" class="form-control" name="studentEmail" placeholder="Please enter your Email Address">
            </div>
            <div class="form-group">
              <input id="contactNo" type="text" class="form-control" name="contactNo" placeholder="Please enter your Phone Number">
            </div>
            <select class="custom-select form-group" id="studentClass" name="studentClass">
              <option selected>Select Class</option>
              <option value="IX">IX</option>
              <option value="X">X</option>
              <option value="XI">XI</option>
              <option value="XII">XII</option>
            </select>
            <select class="custom-select" id="studentSubject" name="studentSubject">
              <option selected>Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Life Science">Life Science</option>
              <option value="Physical Science">Physical Science</option>
              <option value="English">English</option>
              <option value="Biology">Biology</option>
            </select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="joinFreeClassesResetBtn">Reset</button>
            <div id="submit-control">
            <button type="button" onclick="submitModalForm()" class="btn btn-orange" id="joinFreeClassesSubmitBtn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- ======= Header ======= -->
  <header id="header">
    <!-- ======= Top Bar ======= -->
  <section id="topbar" class="d-none d-lg-block">
    <div class="container d-flex">
      <div class="contact-info mr-auto">
        <i class="icofont-envelope"></i><a href="mailto:contact@example.com">hr@odantapuri.net.in</a>
        <i class="icofont-whatsapp" style="border-left: 1px solid;padding-left: 10px;margin-left: 10px;"></i> 033 4180 0555
      </div>
      <div class="social-links">
       <!-- <a href="#" class="twitter"><i class="icofont-twitter"></i></a> -->
        <a href="https://www.facebook.com/Odantapuri-Classes-114410076918153/" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="https://instagram.com/odantapuriclasses?igshid=15zvpf6gh8ojt" class="instagram"><i class="icofont-instagram"></i></a>
        <!--<a href="#" class="skype"><i class="icofont-skype"></i></a>
        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></i></a> -->
      </div>
    </div>
  </section>
    <div class="container d-flex">

      <div class="mr-auto">
        <a href="/"><img src="/IMAGES/website_logo.png" height="60" width="250"></a>

      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="pricing">PRICING</a></li>
          <li><a href="courses">COURSES</a></li>
          <!--<li><a href="teacher">TEACHER</a></li> -->
          <li><a href="onlineclasses">ONLINE CLASS</a></li>
          <li><a href="#joinFreeClassesModal" data-toggle="modal" class="btn" style="color: #fff; background-color: #fd5c28; padding-left: 20px; padding-right: 20px;">START CLASSES FOR FREE</a></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
  </header><!-- End Header -->



  <script>
    window.onscroll = function() {
      myFunction()
    };

    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    //   $('#exampleModalCenter').modal({
    //     backdrop: 'static',
    //     keyboard: false
    // })
  </script>


  <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5ea0538435bcbb0c9ab3a1c6/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

