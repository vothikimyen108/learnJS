// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
    var result = array.find(function(itiem) {
        if (itiem % 2 === 0)
            return itiem;
    });
    return result;
}