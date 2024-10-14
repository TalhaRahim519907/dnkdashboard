let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

function changeImage(imageSrc) {
  document.getElementById("selectedImage").src = imageSrc;
}

$(document).ready(function () {
  var down = false;
  $("#bell").click(function (e) {
    var color = $(this).text();
    if (down) {
      $("#box").css("height", "0px");
      $("#box").css("opacity", "0");
      down = false;
    } else {
      $("#box").css("height", "auto");
      $("#box").css("opacity", "1");
      down = true;
    }
  });
});

$(document).ready(function () {
  $("#example").DataTable({
    //disable sorting on last column
    columnDefs: [{ orderable: false, targets: 5 }],
    language: {
      //customize pagination prev and next buttons: use arrows instead of words
      paginate: {
        previous: '<span class="fa fa-chevron-left"></span>',
        next: '<span class="fa fa-chevron-right"></span>',
      },
      //customize number of elements to be displayed
      lengthMenu:
        'Display <select class="form-control input-sm">' +
        '<option value="5">5</option>' +
        '<option value="10">10</option>' +
        '<option value="15">15</option>' +
        '<option value="20">20</option>' +
        '<option value="25">25</option>' +
        '<option value="-1">All</option>' +
        "</select> results",
    },
  });
});

const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
const yValues = [7, 8, 8, 9, 9, 9, 12, 11, 14, 14, 15, 16];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});

const aValues = ["Yandex", "Youtube", "Google", "Facebook", "Instagram"];
const bValues = [65, 39, 44, 24, 15];
const barColors = ["#FFC300", "#F70B04", "#464BF0", "46D4F0", "#45BF07"];

new Chart("myChart-2", {
  type: "pie",
  data: {
    labels: aValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: bValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "World Wide Traffic 2023",
    },
  },
});

// file upload
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-upload-wrap").hide();

      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();

      $(".image-title").html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".image-upload-wrap").show();
}
$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});

// ------------------------------------------------------------------------------------
// document.querySelector(".chat[data-chat=person2]").classList.add("active-chat");
// document.querySelector(".person[data-chat=person2]").classList.add("active");

// let friends = {
//     list: document.querySelector("ul.people"),
//     all: document.querySelectorAll(".left .person"),
//     name: "",
//   },
//   chat = {
//     container: document.querySelector(".container .right"),
//     current: null,
//     person: null,
//     name: document.querySelector(".container .right .top .name"),
//   };

// friends.all.forEach((f) => {
//   f.addEventListener("mousedown", () => {
//     f.classList.contains("active") || setAciveChat(f);
//   });
// });

// function setAciveChat(f) {
//   friends.list.querySelector(".active").classList.remove("active");
//   f.classList.add("active");
//   chat.current = chat.container.querySelector(".active-chat");
//   chat.person = f.getAttribute("data-chat");
//   chat.current.classList.remove("active-chat");
//   chat.container
//     .querySelector('[data-chat="' + chat.person + '"]')
//     .classList.add("active-chat");
//   friends.name = f.querySelector(".name").innerText;
//   chat.name.innerHTML = friends.name;
// }
