const footer = `
<footer class="page-footer container flex faround fevenly-xs fstart-lg">
  <div class="fcol-10 fcol-xs-8 fcol-md-7 flex faround fstart-md">
      <div class="fcol-12 fcol-md-4">
          <h3>Contact</h3>
          <ul>
          <li><a href="#">Help</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Report Error</a></li>
          </ul>
      </div>
      <div class="fcol-12 fcol-md-7">
          <h3>About</h3>
          <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Corporate Responsibility</a></li>
          </ul>
      </div>
  </div>
  <div class="fcol-1 fend fmiddle fcol-md-5 fend-md ftop-md flex">
      <a href="https://www.facebook.com/" class="social-media" rel="noopener" target="_blank" title="Facebook">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" viewBox="0 0 128 128">
          <path d="M0,0v128h69l-0.1-49.9l-16.7,0.1l-0.1-19L69,59V42.5c0-10.4,7.3-23.2,23.2-23.2c4.2,0,11.2-0.3,16.7,0.4v17.4H97.5
          c-3.1,0-8.5,0.6-8.5,9.5c0,7.3,0.1,12.4,0.1,12.4h18.8l-2.3,19.2H89V128h39V0H0z" />
          </svg>
      </a>
      <a href="https://www.instagram.com/" class="social-media" rel="noopener" target="_blank" title="Instagram">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" viewBox="0 0 128 128">
          <path d="M79.8,64c0,8.7-7.1,15.8-15.8,15.8S48.3,72.7,48.3,64s7.1-15.8,15.8-15.8C72.8,48.2,79.8,55.3,79.8,64z M102.3,43.6v40.8
          c-0.1,9.9-8,17.8-17.9,17.9H43.6c-9.9-0.1-17.8-8-17.9-17.9V43.6c0.1-9.9,8-17.8,17.9-17.9h40.8C94.2,25.8,102.2,33.8,102.3,43.6z
          M88,64c0-13.3-10.7-24-24-24S40,50.7,40,64s10.7,24,24,24C77.2,88,88,77.3,88,64L88,64z M94.5,39.7c0-3-2.5-5.5-5.5-5.5
          s-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5S94.5,42.7,94.5,39.7z M128,0v128H0V0H128z M110.6,43.3h-0.1c0-14.2-11.6-25.8-25.8-25.8H43.3
          c-14.2,0-25.8,11.6-25.8,25.8v41.5c0,14.2,11.6,25.8,25.8,25.8h41.5c14.2,0,25.8-11.6,25.8-25.8V43.3z" />
          </svg>
      </a>
      <a href="https://www.linkedin.com/" class="social-media" rel="noopener" target="_blank" title="LinkedIn">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" viewBox="0 0 128 128">
          <path d="M0,0v128h128V0H0z M35.8,91.9V54.2h12.7l0.1,37.7H35.8z M42.2,49.2c-4,0-7.2-3-7.2-6.6c0-3.6,3.2-6.6,7.2-6.6s7.2,3,7.2,6.6
          C49.4,46.2,46.2,49.2,42.2,49.2z M81.6,92V70.5c0-10.2-13.9-8.9-13.9-0.4v21.8H55V54.2h12.7v5.2c5.5-9.2,26.7-8.8,26.7,9.7
          c0,7.5,0.1,22.8,0.1,22.8L81.6,92z" />
          </svg>
      </a>
      <a href="https://twitter.com/" class="social-media" rel="noopener" target="_blank" title="Twitter">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" viewBox="0 0 128 128">
          <path d="M0,0v128h128V0H0z M99.6,45.6c2.2,38.3-39.1,70.6-80.5,46.8c9.6,1,19.3-1.8,26.9-7.8c-7.6,0.1-14.9-5.8-17.1-13
          c2.2,0.3,3.5,0.9,7.8-0.2c-12-3.1-14.2-13.5-14.2-18.3c1.6,0.8,4.9,2.3,8,2.2c-3-1.4-12.6-10.9-5.4-24.5c12.7,14.7,26,18.1,38,19.2
          c-3.4-21.4,20.7-28.8,31.5-16.8c4.2-0.8,8.2-2.4,11.8-4.8c-0.4,3.3-4.7,8.8-8,10.3c3.6-0.4,7.2-1.3,10.5-2.8
          C106.9,38.9,103.6,43.4,99.6,45.6z" />
          </svg>
      </a>
  </div>
</footer>
`;

const pageMain = document.querySelector("main");
pageMain.insertAdjacentHTML("afterend", footer);