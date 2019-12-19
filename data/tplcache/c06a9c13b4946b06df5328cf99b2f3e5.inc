<div class="sitemap_item">
            <div class="sitemap_title"><a href='{dede:field name='typeurl'/}' title='{dede:field name='typename'/}'>{dede:field name='typename'/}</a></div>
            <ul>
              {dede:channel type='son' noself='yes'}
              <li><a href='[field:typeurl/]' title="[field:typename/]">[field:typename/]</a></li>
              {/dede:channel}
            </ul>
          </div>