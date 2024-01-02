let index = 1;
const arrBuyurtma = [];

function addGuest() {
    const hona_raqam = document.getElementById('hona_raqam').value;
    const bosh_sana = document.getElementById('bosh_sana').value;
    const tug_sana = document.getElementById('tug_sana').value;

    let sanaBosh_sana = new Date(bosh_sana);
    let sanaTug_sana = new Date(tug_sana);
    let yilB = sanaBosh_sana.getFullYear();
    let oyB = sanaBosh_sana.getMonth() + 1;
    let kunB = sanaBosh_sana.getDate();
    let yilT = sanaTug_sana.getFullYear();
    let oyT = sanaTug_sana.getMonth() + 1;
    let kunT = sanaTug_sana.getDate();
    let fullBosh = yilB + "-" + oyB + "-" + kunB;
    let fullTug = yilT + "-" + oyT + "-" + kunT;

    function resedB() {
        // Ensure 'body' is properly defined in your code.
        arrBuyurtma.forEach((itemB) => {
            if (!hona_raqam && !bosh_sana && !tug_sana) {
                alert("Malumodlarni togri kiriting!");
            } else {
                // Ensure 'body' is properly defined in your code.
                body.innerHTML += `<tr class="ustun">
                    <td>${index}</td>
                    <td>${itemB.hona_raqam}</td>
                    <td>${itemB.fullBosh}</td>
                    <td>${itemB.fullTug}</td>
                    <td>${parseInt(1)}</td>
                    <td>100$</td>
                </tr>`;
                index++;
            }
        });
    }

    function getBuyurtma() {
        let saveB = localStorage.getItem("arrBuyurtma");
        if (saveB) {
            arrBuyurtma = JSON.parse(saveB);
            resedB();
        }
    }

    function saveBuyurtma() {
        let ObjB = {
            "hona_raqam": hona_raqam,
            "bosh_sana": bosh_sana,
            "tug_sana": tug_sana
        };

        arrBuyurtma.push(ObjB);
        localStorage.setItem('arrBuyurtma', JSON.stringify(arrBuyurtma));
    }

    saveBuyurtma();
    getBuyurtma();

    document.getElementById('hona_raqam').value = null;
    document.getElementById('bosh_sana').value = null;
    document.getElementById('tug_sana').value = null;
}





