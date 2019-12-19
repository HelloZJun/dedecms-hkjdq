<div class="xl12 xs6 xm6 xb4 margin-large-bottom">
        <div class="media">
          <div class="media-left float-left">
            <p class="f-day padding-big-top">[field:pubdate function="MyDate('d',@me)"/]</p>
            <p class="f-year padding-top">[field:pubdate function="MyDate('y-m',@me)"/]</p>
          </div>
          <div class="media-body">
            <h3 class="text-default"><a href="[field:arcurl/]" title="[field:title/]" >[field:title/]</a></h3>
            <p>[field:body function='cn_substr(html2text(@me),110)'/]...</p>
          </div>
        </div>
      </div>