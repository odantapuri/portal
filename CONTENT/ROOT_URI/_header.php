<script>
  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }
</script>
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

  <!-- ======= Top Bar ======= -->
  <section id="topbar" class="d-none d-lg-block">
    <div class="container d-flex">
      <div class="contact-info mr-auto">
        <i class="icofont-envelope"></i><a href="mailto:contact@example.com">hr@odantapuri.net.in</a>
        <span font-size=14px>Odantapuri Classes </span>

        <i class="icofont-whatsapp" style="border-left: 1px solid;padding-left: 10px;margin-left: 10px;"></i> +91 9593930068
      </div>
      <div class="social-links">
        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
        <a href="#" class="skype"><i class="icofont-skype"></i></a>
        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></i></a>
      </div>
    </div>
  </section>
  <!---=============Modal ========= -->

  <div class="modal fade" id="joinFreeClassesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="joinFreeClassesModalLabel">Enter details about yourself</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <input id="inputName" type="text" class="form-control" name="name" placeholder="Please enter your Name">
            </div>
            <div class="form-group">
              <input id="inputEmail" type="text" class="form-control" name="email" placeholder="Please enter your Email Address">
            </div>
            <div class="form-group">
              <input id="inputContact" contactNo" type="text" class="form-control" name="contactNo" placeholder="Please enter your Phone Number">
            </div>
            <select class="custom-select form-group" id="inputClass">
              <option selected>Select Class</option>
              <option value="1">IX</option>
              <option value="2">X</option>
              <option value="3">XI</option>
              <option value="3">XII</option>
            </select>
            <select class="custom-select" id="inputSubject">
              <option selected>Select Subject</option>
              <option value="1">Mathematics</option>
              <option value="2">Physics</option>
              <option value="3">Chemistry</option>
              <option value="4">Life Science</option>
              <option value="5">Physical Science</option>
              <option value="6">English</option>
              <option value="7">Biology</option>
            </select>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="joinFreeClassesResetBtn">Reset</button>
          <button type="button" class="btn btn-orange" id="joinFreeClassesSubmitBtn">Submit</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ======= Header ======= -->
  <header id="header">
    <div class="container d-flex">

      <div class="mr-auto">
        <a href="/"><img src="/IMAGES/website_logo.png" height="60" width="250"></a>

      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="pricing">PRICING</a></li>
          <li><a href="teacher">TEACHER</a></li>
          <li><a href="#">ONLINE CLASS</a></li>
          <li><a href="#joinFreeClassesModal" data-toggle="modal" class="btn" style="color: #fff; background-color: #fd5c28; padding-left: 20px; padding-right: 20px;">START CLASSES FOR FREE</a></li>
          <!-- <li><a href="services.html">Services</a></li> 
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="testimonials.html">Testimonials</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="blog.html">Pricing</a></li> -->
          <!--<li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down"><a href="#">Drop Down 2</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li> -->

        </ul>
      </nav><!-- .nav-menu -->

      <!-- join classes modal -->

      <div class="modal fade" id="joinFreeClassesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="joinFreeClassesModalLabel">Enter details about yourself</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <input type="text" class="form-control" id="inputName" placeholder="Enter name">
                </div>
                <div class="form-group">
                  <!-- <div class="icon"><i class="icofont-email"></i></div> -->
                  <input type="email" class="form-control" id="inputEmail" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <!-- <div class="icon"><i class="icofont-phone"></i></div> -->
                  <input type="number" class="form-control" id="inputPhone" placeholder="Enter phone number">
                </div>
                <div class="form-group">
                  <select class="custom-select" id="inputClass">
                    <option selected>Select Class</option>
                    <option value="1">IX</option>
                    <option value="2">X</option>
                    <option value="3">XI</option>
                    <option value="3">XII</option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="custom-select" id="inputSubject">
                    <option selected>Select Subject</option>
                    <option value="1">Mathematics</option>
                    <option value="2">Physics</option>
                    <option value="3">Chemistry</option>
                    <option value="4">Life Science</option>
                    <option value="5">Physical Science</option>
                    <option value="6">English</option>
                    <option value="7">Biology</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="joinFreeClassesResetBtn">Reset</button>
              <button type="button" class="btn btn-orange" id="joinFreeClassesSubmitBtn">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <!-- modal end -->

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