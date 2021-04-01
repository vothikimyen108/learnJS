/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */
function isTruthy(x) {
    var temp = !x;//phudinhlaix
    if(temp)
     return false;
    else
     return true;
    }
    
    console.log(isTruthy(true));
    console.log(isTruthy('0'));
    console.log(isTruthy([]));
    console.log(isTruthy(1));
    console.log(isTruthy(undefined));