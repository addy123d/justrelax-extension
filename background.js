document.body.innerHTML += `
  <section class="extension-box">
  <style>
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

        .box {
          position: fixed;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);

          z-index: 10000;

        }

        .stop_button{
          padding: 15px 25px;
          border: unset;
          border-radius: 15px;
          color: #212121;
          z-index: 1;
          background: #e8e8e8;
          position: relative;
          font-weight: 1000;
          font-size: 37px;
          -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
          box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
          transition: all 250ms;
          cursor: pointer;
          outline : none;
          z-index: 10000;
          overflow: hidden;
        }

        .stop_button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          border-radius: 15px;
          background-color: #212121;
          z-index: -1;
          -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
          box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
          transition: all 250ms
        }

        .stop_button:hover {
          color: #e8e8e8;
        }

        .stop_button:hover::before {
          width: 100%;
        }

        </style>
        <section class="extension">
          <div class="box">
            <div class="buttons">
              <div class="button1">
                <button class="stop_button"><span style="display: inline;">Relax Time 🧋 <span id="relax_reverse_count"></span></span></button>
              </div>
            </div>
          </div>
        </section>
        </section>
`;

document.querySelector(".extension").style.display = 'none';

function count () {
  let reverse_count = 10;
  const x = setInterval(function () {
        reverse_count--;
        console.log("Distance: ");
        console.log(reverse_count);

        document.getElementById("relax_reverse_count").innerText = reverse_count;

        //do something later when date is reached
        if (reverse_count <= 0) {
            clearInterval(x);
        }
        //seconds
  }, 1000)
}


setInterval(() => {
  count();
  document.querySelector(".extension").style.display = 'block';
  document.querySelector(".stop_button").addEventListener("click", () => {
  document.querySelector(".extension").style.display = 'none';
  })
}, 10000);



