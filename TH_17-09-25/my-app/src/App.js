import TodoList from "./TodoList";
import ColorPicker from "./ColorBox";
import CartApp from "./CartApp";
import PostApp from "./PostApp";
import QuizApp from "./QuizApp";

function App() {
  return (
    <div style={{padding: 20}}>
      <div style={{fontSize: 22, fontWeight: "bold"}}>Bài thực hành 01:</div>
      <br />
      <div>
        - Mục tiêu: Làm quen với ReactJS, biết cách tạo Project với CRA (Create
        React App), sử dụng component, props, state
      </div>
      <div>
        - Thời gian làm bài từ: 13h15 đến 16h45, sinh viên tạo repo trên Github,
        đặt tên là TH01_Mã sinh viên, vd: TH01_B24DCCC014
      </div>
      <div>
        - Sinh viên push code lên github và add thầy vào repo (tài khoản github:
        thanhpq@ptit.edu.vn)
      </div>
      <br />
      <div>
        <b>Bài 1: To-do List:</b> Có một input và nút “Thêm”. Khi nhập nội dung
        và nhấn Thêm, item mới sẽ được hiển thị trong danh sách. Mỗi item có nút
        Xóa để xóa khỏi danh sách.
      </div>
      <TodoList />
      <br />
      <div>
        <b>Bài 2: Bộ chọn màu:</b> Có 3 nút: Đỏ, Xanh, Vàng. Khi nhấn vào nút
        nào thì hiển thị một ô vuông với màu tương ứng. Tạo component ColorBox
        nhận props color để hiển thị ô màu.
      </div>
      <ColorPicker />
      <br />
      <div>
        <b>Bài 3: Chọn sản phẩm & giỏ hàng:</b> Có danh sách sản phẩm (VD: Tên,
        giá). Mỗi sản phẩm có nút Thêm vào giỏ. Khi bấm, giỏ hàng (hiển thị bên
        dưới) sẽ chứa danh sách các sản phẩm đã chọn. Hiển thị tổng giá tiền
        trong giỏ.
      </div>
      <CartApp />
      <br />
      <div>
        <b>Bài 4: Like/Dislike Post:</b> Có component Post hiển thị một đoạn
        text và 2 nút: Like và Dislike. Khi nhấn Like → tăng số lượt like. Khi
        nhấn Dislike → tăng số lượt dislike. App có thể render 2–3 post khác
        nhau.
      </div>
      <PostApp />
      <br />
      <div>
        <b>Bài 5: Quiz App đơn giản:</b> Có 3 câu hỏi trắc nghiệm (mỗi câu có 4
        đáp án). Khi chọn đáp án, hiển thị ngay đúng/sai. Sau khi trả lời hết,
        hiển thị tổng số câu đúng.
      </div>
      <QuizApp />
    </div>
  );
}

export default App;
