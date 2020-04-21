 <!-- ======= Footer ======= -->

<footer id="footer">

    <div class="container d-md-flex py-4">

      <div class="mr-md-auto text-center text-md-left">
        <div class="copyright">
          &copy; Copyright <strong><span>Odantapuri Classes</span></strong>. All Rights Reserved
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/jquery-sticky/jquery.sticky.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
  <script type="text/javascript">

    var joinFreeClassesResetBtn = $("#joinFreeClassesResetBtn");
    var joinFreeClassesSubmitBtn = $("#joinFreeClassesSubmitBtn");

    $(joinFreeClassesResetBtn).on('click', resetModalForm);
    $(joinFreeClassesSubmitBtn).on('click', submitModalForm);

    function resetModalForm() {
      $("#joinFreeClassesModal #studentName").val('');
      $("#joinFreeClassesModal #studentEmail").val('');
      $("#joinFreeClassesModal #contactNo").val('');
      $('#joinFreeClassesModal #studentClass').find(":selected").text('Select class');
      $('#joinFreeClassesModal #studentSubject').find(":selected").text('Select subject');
    }

    function submitModalForm() {
      var formInputs = {};
      formInputs.name = $("#joinFreeClassesModal #studentName").val();
      formInputs.email = $("#joinFreeClassesModal #studentEmail").val();
      formInputs.phone = $("#joinFreeClassesModal #contactNo").val();
      formInputs.class = $('#joinFreeClassesModal #studentClass').find(":selected").text().toUpperCase() === "SELECT CLASS" ? "" : $('#joinFreeClassesModal #inputClass').find(":selected").text();
      formInputs.subject = $('#joinFreeClassesModal #studentSubject').find(":selected").text().toUpperCase() === "SELECT SUBJECT" ? "" : $('#joinFreeClassesModal #inputSubject').find(":selected").text();
      var dataString = 'studentName='+ formInputs.name + '&studentEmail='+ formInputs.email + '&contactNo='+ formInputs.phone + '&inputClass='+ formInputs.class + '&inputSubject='+ formInputs.subject;
      $.ajax({
      type: "POST",
      url: "test.php",
      data: dataString,
      cache: false,
      success: function(result){
      alert(result);
      window.location.replace("/");
    }
      }
      });
      
      resetModalForm();
      
  </script>

</body>
