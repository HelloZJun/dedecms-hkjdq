<li>
              <div class="time">
                <p class="time-day">[field:pubdate function="MyDate('d',@me)"/]</p>
                <p class="time-date">[field:pubdate function="MyDate('Y-m',@me)"/]</p>
              </div>
              <div class="content">
                <h3><a href="[field:arcurl/]" title="[field:title/]" >[field:title/]</a></h3>
                <div class="desc">[field:description function="cn_substr(@me,160)"/]...<span class="more"><a href="[field:arcurl/]" title="[field:title/]">More>></a></span></div>
              </div>
            </li>