/*
 * Overlapr Bookmarklet
 *
 * A simple bookmarklet to make viewing overlaps simpler on overlapr.com
 *
 * by Eric Lindvall <eric@5stops.com>
 *
 */

function Overlapr() {
  this.overlap = function() {
    /* If we aren't on twitter, just redirect to overlapr.com */
    if (!window.location.host.match(/twitter.com$/i)) {
      window.location = "http://overlapr.com/";
      return;
    }

    this.session_screen_name = $('meta[name=session-user-screen_name]').attr('content');
    this.page_screen_name = $('meta[name=page-user-screen_name]').attr('content');

    if (this.session_screen_name && this.page_screen_name && this.session_screen_name != this.page_screen_name) {
      window.location = "http://overlapr.com/overlaps/" + this.session_screen_name + "/" + this.page_screen_name;
    } else if (this.session_screen_name) {
      flash("View a user page to use the Overlapr Bookmarklet.");
    } else {
      flash("Please login to use the Overlapr Bookmarklet.");
    }
  }

  function flash (message) {
    (new ShortNotification()).setMessage(message).show();
  }
};

/* Do an overlap */
new Overlapr().overlap();
