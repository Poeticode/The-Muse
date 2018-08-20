<template>
  <div class="mailchimp">
    <!-- Begin MailChimp Signup Form -->
    <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
    <div id="mc_embed_signup">
      <form action="https://chattymuse.us19.list-manage.com/subscribe/post?u=5e0fad03b99114874aca7b6db&amp;id=74ae85f01a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <label for="mce-EMAIL">Subscribe to the monthly newsletter!</label>
          <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5e0fad03b99114874aca7b6db_74ae85f01a" tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
      </form>
    </div>
    <!--End mc_embed_signup-->
  </div>
</template>

<style lang="scss" scoped>
	#mc_embed_signup{
    background:#fff; 
    clear:left; 
    font:14px Helvetica,Arial,sans-serif; 
    width:100%;
    padding: 20px;
    height: 160px;
  }
  .mailchimp {
    margin-top: 160px;
  }

  @media screen and (min-width: 768px) {
    #mc_embed_signup{
      height: 120px;
    }
    .mailchimp {
      margin-top: -120px;
    }
  }
</style>