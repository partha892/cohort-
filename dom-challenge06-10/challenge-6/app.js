
            const showtime = document.getElementById("digital-clock");
            const showdate = document.getElementById("date");
            const secdeg = document.getElementById("second-hand");
            const mindeg = document.getElementById("minute-hand");
            const hrdeg = document.getElementById("hour-hand");

            function updatetime() {
                const date = new Date();
                const hr = date.getHours().toString().padStart(2, "0");
                const min = date.getMinutes().toString().padStart(2, "0");
                const sec = date.getSeconds().toString().padStart(2, "0");
                const fullDateTime = date.toLocaleString('en-US', { 
                    year: 'numeric', month: 'long', day: 'numeric', 
                     
                  });
                  const secondDeg = ((sec / 60) * 360) ;
                  const minuteDeg = (min / 60) * 360 + (sec / 60) * 6;
                  const hourDeg = (hr % 12) * 30 + (min / 60) * 30;
                  if (sec === 0) {
                    totalSecondRotation += 360;
                }
                if (min === 0) {
                    totalMinutesRotation += 360;
                }
                if (hr === 0) {
                    totalHoursRotation += 360;
                }





                //const day = date.getDate().toString().padStart(2,"0");
                //const month = date.getMonth().toString().padStart(2,"0");
                //const year = date.getFullYear().toString().padStart(2,"0")

                //console.log(date)
                //console.log(`${hr} : ${min} : ${sec}`);
                showtime.textContent = `${hr} : ${min} : ${sec}`;
               showdate.textContent = `${fullDateTime}`
               secdeg.style.transform = `rotate(${secondDeg}deg)`;
               mindeg.style.transform = `rotate(${minuteDeg}deg)`;
               hrdeg.style.transform = `rotate(${hourDeg}deg)`;

            }

            updatetime();
            setInterval(updatetime, 1000);

        