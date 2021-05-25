//bài 1 
document.getElementById("btnTinhTien").onclick = function () {
    //lấy số ngày từ người dung nhập
    var soNgay = document.getElementById("txtSoNgayLam").value;
    //xử lý phần tính tiền lương
    var tinhTienLuong = 100000 * soNgay;
    //Định dạng số dưới dạng tiền tệ
    var currentFormat = new Intl.NumberFormat('vn-VN');
    var tienTuongformat = currentFormat.format(tinhTienLuong)

    //in ra màn hình kết quả tiền lương của nhân viên 
    document.getElementById("tienLuong").innerHTML = "Tiền lương của bạn là= " + tienTuongformat + "VND";
};
//end bài 1 

//bài 2 
document.getElementById("btnTinhTB").onclick = function () {
    //lấy dữ liệu từ người dùng nahapj vào

    var so1 = document.getElementById("txtSo1").value;
    var so2 = document.getElementById("txtSo2").value;
    var so3 = document.getElementById("txtSo3").value;
    var so4 = document.getElementById("txtSo4").value;
    var so5 = document.getElementById("txtSo5").value;
    //xử lsy phần tính toán
    var tinhTrungBinh = (parseInt(so1) + parseInt(so2) + parseInt(so3) + parseInt(so4) + parseInt(so5)) / 5


    //in ramanf hình kết quả trung bình của 5 số

    document.getElementById("KetQua").innerHTML = "Giá trị trung bình của 5 số trên là: " + tinhTrungBinh;

};

//end bài 2 


//bài 3

document.getElementById("btnDoiTienTe").onclick = function () {
    //lấy số tiền mà người dùng nhập vào
    var soTien = document.getElementById("txtSoTienDollar").value;

    //xử lý phần chuyển đổi 1 đô = 23,500 vnd

    var chuyenDoi = 23500 * soTien;
    // chuyển đổi số sang định dạnh tiền tệ

    var currentFormat = new Intl.NumberFormat('vn-VN');
    var tienChuyenDoi = currentFormat.format(chuyenDoi);

    //xuất ra màn hính số tiền chuyển đổi

    document.getElementById("XuatBai3").innerHTML = "Số tiền bạn chuyển từ USD sang VND là: " + tienChuyenDoi + "VND";


};
//end bài 3


//bài 4
document.getElementById("btnTinhDT_CV").onclick = function () {
    //lấy sso liệu từ người dùng nhập vào
    var chieuDai = document.getElementById("txtChieuDai").value;
    var chieuRong = document.getElementById("txtChieuRong").value;

    //xử lý phần tính diện tích và chu vi
    
    var dienTich = chieuDai * chieuRong;
    var chuVi = (parseInt(chieuDai) + parseInt(chieuRong)) * 2

    //xuất kết quả ra màn hình

    document.getElementById("KetQuaBai4").innerHTML = "Diện tích HCN là : " + dienTich + "<br />" + "Chu vi HCN là: " + chuVi;
};


//end bài 4


//bài 5
document.getElementById("btnTinhB5").onclick = function () {
    //lấy số liệu từ người dùng nhập vào
    var n = document.getElementById("txtSoNguyenN").value;

    //xử lấy phần lấy số hàng chục , đơn vị tính tổn 2 số đó lại
     var hangTruc = Math.floor(n % 10);
     var hangDonVi = Math.floor(n / 10);
    var tong = parseInt(hangTruc) + parseInt(hangDonVi);

    //xuất kết quả ra màn hình 
    document.getElementById("KetQuaB5").innerHTML = "Tổng 2 ký số là: " + tong;
};


//end bài 5