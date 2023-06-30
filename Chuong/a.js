const links = document.querySelectorAll('.link');

// Lặp qua tất cả các liên kết và thêm sự kiện click vào chúng
for (let i = 0; i < links.length; i++) {
links[i].addEventListener('click', function (event) {

// Loại bỏ lớp 'active' khỏi tất cả các liên kết
for (let j = 0; j < links.length; j++) {
  if (links[j].classList.contains('active')) {
      links[j].classList.remove('active');
  }
}

// Thêm lớp 'active' cho liên kết vừa click
event.currentTarget.classList.add('active');
});
}

// Lấy tất cả các liên kết trên trang
var linkss = document.querySelectorAll('.link');

// Thêm sự kiện scroll cho cửa sổ trình duyệt
window.addEventListener('scroll', function() {
  // Lặp qua tất cả các liên kết và kiểm tra nếu vị trí của người dùng nằm trên liên kết đó
  for (var i = 0; i < linkss.length; i++) {
    var link = linkss[i];
    var section = document.querySelector(link.hash);
    var rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      // Thêm lớp 'active' vào liên kết tương ứng nếu vị trí của người dùng nằm trên phần nội dung tương ứng
      link.classList.add('active');
    } else {
      // Loại bỏ lớp 'active' khỏi liên kết nếu vị trí của người dùng không nằm trên phần nội dung tương ứng
      link.classList.remove('active');
    }
  }
});