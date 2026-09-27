const QUIZ_DATA = [
  {
    "test_num": 1,
    "title": "Đề trắc nghiệm số 1",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 193,
        "title_raw": "Câu 1.[!b:$ Quan điểm của chủ nghĩa duy vật biện chứng về nguồn gốc mối liên hệ giữa các sự vật, hiện tượng:$]",
        "clean_text": "Quan điểm của chủ nghĩa duy vật biện chứng về nguồn gốc mối liên hệ giữa các sự vật, hiện tượng:",
        "options_raw": [
          "A. Do lực lượng siêu nhiên (thượng đế, ý niệm) sinh ra.",
          "B. Do cảm giác thói quen của con người tạo ra.",
          "*C. Do tính thống nhất vật chất của thế giới.",
          "D. Do tư duy con người tạo ra rồi đưa vào tự nhiên và xã hội."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Do lực lượng siêu nhiên (thượng đế, ý niệm) sinh ra."
          },
          {
            "letter": "B",
            "text": "Do cảm giác thói quen của con người tạo ra."
          },
          {
            "letter": "C",
            "text": "Do tính thống nhất vật chất của thế giới."
          },
          {
            "letter": "D",
            "text": "Do tư duy con người tạo ra rồi đưa vào tự nhiên và xã hội."
          }
        ],
        "correct_letter": "C",
        "correct_text": "Do tính thống nhất vật chất của thế giới."
      },
      {
        "q_num": 2,
        "orig_id": 12,
        "title_raw": "Câu 2.[!b:$ Tồn tại xã hội là:$]",
        "clean_text": "Tồn tại xã hội là:",
        "options_raw": [
          "*A. Điều kiện sinh hoạt vật chất và quan hệ vật chất của xã hội",
          "B. Môi trường xã hội",
          "C. Nền kinh tế",
          "D. Môi trường tự nhiên"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Điều kiện sinh hoạt vật chất và quan hệ vật chất của xã hội"
          },
          {
            "letter": "B",
            "text": "Môi trường xã hội"
          },
          {
            "letter": "C",
            "text": "Nền kinh tế"
          },
          {
            "letter": "D",
            "text": "Môi trường tự nhiên"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Điều kiện sinh hoạt vật chất và quan hệ vật chất của xã hội"
      },
      {
        "q_num": 3,
        "orig_id": 28,
        "title_raw": "Câu 3.[!b:$ Công lao phát hiện vấn đề giai cấp và đấu tranh giai cấp gắn với tên tuổi của:$]",
        "clean_text": "Công lao phát hiện vấn đề giai cấp và đấu tranh giai cấp gắn với tên tuổi của:",
        "options_raw": [
          "A. Các nhà kinh tế chính trị học Anh.",
          "B. Các nhà tư tưởng tư sản",
          "*C. Các nhà sử học Pháp.",
          "D. C. Mác và Ph. Ăng ghen."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Các nhà kinh tế chính trị học Anh."
          },
          {
            "letter": "B",
            "text": "Các nhà tư tưởng tư sản"
          },
          {
            "letter": "C",
            "text": "Các nhà sử học Pháp."
          },
          {
            "letter": "D",
            "text": "C. Mác và Ph. Ăng ghen."
          }
        ],
        "correct_letter": "C",
        "correct_text": "Các nhà sử học Pháp."
      },
      {
        "q_num": 4,
        "orig_id": 156,
        "title_raw": "Câu 4.[!b:$ Kiến trúc thượng tầng chịu sự quyết định của cơ sở hạ tầng theo cách:$]",
        "clean_text": "Kiến trúc thượng tầng chịu sự quyết định của cơ sở hạ tầng theo cách:",
        "options_raw": [
          "A. Chi phối",
          "B. Phụ thuộc",
          "C. Thụ động",
          "*D. Chủ động"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chi phối"
          },
          {
            "letter": "B",
            "text": "Phụ thuộc"
          },
          {
            "letter": "C",
            "text": "Thụ động"
          },
          {
            "letter": "D",
            "text": "Chủ động"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Chủ động"
      },
      {
        "q_num": 5,
        "orig_id": 42,
        "title_raw": "Câu 5.[!b:$ Kiến trúc thượng tầng của xã hội bao gồm:$]",
        "clean_text": "Kiến trúc thượng tầng của xã hội bao gồm:",
        "options_raw": [
          "A. Toàn bộ các quan hệ xã hội",
          "B. Toàn bộ các tư tưởng xã hội và các tổ chức tương ứng.",
          "C. Toàn bộ ý thức xã hội.",
          "*D. Toàn bộ quan điểm về chính trị, pháp quyền,…và những thiết chế xã hội tương ứng như nhà nước, đảng phái,… được hình thành trên cơ sở hạ tầng nhất định."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Toàn bộ các quan hệ xã hội"
          },
          {
            "letter": "B",
            "text": "Toàn bộ các tư tưởng xã hội và các tổ chức tương ứng."
          },
          {
            "letter": "C",
            "text": "Toàn bộ ý thức xã hội."
          },
          {
            "letter": "D",
            "text": "Toàn bộ quan điểm về chính trị, pháp quyền,…và những thiết chế xã hội tương ứng như nhà nước, đảng phái,… được hình thành trên cơ sở hạ tầng nhất định."
          }
        ],
        "correct_letter": "D",
        "correct_text": "Toàn bộ quan điểm về chính trị, pháp quyền,…và những thiết chế xã hội tương ứng như nhà nước, đảng phái,… được hình thành trên cơ sở hạ tầng nhất định."
      },
      {
        "q_num": 6,
        "orig_id": 46,
        "title_raw": "Câu 6.[!b:$ Đặc trưng cơ sở hạ tầng của một xã hội là gì?$]",
        "clean_text": "Đặc trưng cơ sở hạ tầng của một xã hội là gì?",
        "options_raw": [
          "*A. Quan hệ sản xuất thống trị",
          "B. Tất cả các quan hệ sản xuất trên",
          "C. Quan hệ sản xuất tàn dư",
          "D. Quan hệ sản xuất mầm mống"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan hệ sản xuất thống trị"
          },
          {
            "letter": "B",
            "text": "Tất cả các quan hệ sản xuất trên"
          },
          {
            "letter": "C",
            "text": "Quan hệ sản xuất tàn dư"
          },
          {
            "letter": "D",
            "text": "Quan hệ sản xuất mầm mống"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Quan hệ sản xuất thống trị"
      },
      {
        "q_num": 7,
        "orig_id": 136,
        "title_raw": "Câu 7.[!b:$ Nguyên tắc nào rút ra từ mối quan hệ khách quan - chủ quan:$]",
        "clean_text": "Nguyên tắc nào rút ra từ mối quan hệ khách quan - chủ quan:",
        "options_raw": [
          "*A. Nguyên tắc tôn trọng khách quan và phát huy tính năng động chủ quan",
          "B. Nguyên tắc phát triển",
          "C. Nguyên tắc lịch sử - cụ thể",
          "D. Nguyên tắc toàn diện"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguyên tắc tôn trọng khách quan và phát huy tính năng động chủ quan"
          },
          {
            "letter": "B",
            "text": "Nguyên tắc phát triển"
          },
          {
            "letter": "C",
            "text": "Nguyên tắc lịch sử - cụ thể"
          },
          {
            "letter": "D",
            "text": "Nguyên tắc toàn diện"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Nguyên tắc tôn trọng khách quan và phát huy tính năng động chủ quan"
      },
      {
        "q_num": 8,
        "orig_id": 11,
        "title_raw": "Câu 8.[!b:$ Cống hiến quan trọng nhất của triết học Mác về bản chất con người:$]",
        "clean_text": "Cống hiến quan trọng nhất của triết học Mác về bản chất con người:",
        "options_raw": [
          "A. Vạch ra hai mặt cơ bản tạo thành bản chất con người là cái sinh vật và cái xã hội.",
          "*B. Vạch ra vai trò của quan hệ xã hội trong việc hình thành bản chất con người.",
          "C. Vạch ra bản chất con người là chủ thể sáng tạo lịch sử.",
          "D. Vạch ra bản chất con người vừa là sản phẩm của hoàn cảnh, vừa là chủ thể của hoàn cảnh"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Vạch ra hai mặt cơ bản tạo thành bản chất con người là cái sinh vật và cái xã hội."
          },
          {
            "letter": "B",
            "text": "Vạch ra vai trò của quan hệ xã hội trong việc hình thành bản chất con người."
          },
          {
            "letter": "C",
            "text": "Vạch ra bản chất con người là chủ thể sáng tạo lịch sử."
          },
          {
            "letter": "D",
            "text": "Vạch ra bản chất con người vừa là sản phẩm của hoàn cảnh, vừa là chủ thể của hoàn cảnh"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Vạch ra vai trò của quan hệ xã hội trong việc hình thành bản chất con người."
      },
      {
        "q_num": 9,
        "orig_id": 96,
        "title_raw": "Câu 9.[!b:$ Hiểu vấn đề “bỏ qua” chế độ tư bản chủ nghĩa ở nước ta như thế nào là đúng:$]",
        "clean_text": "Hiểu vấn đề “bỏ qua” chế độ tư bản chủ nghĩa ở nước ta như thế nào là đúng:",
        "options_raw": [
          "*A. Là sự “phát triển rút ngắn” và “bỏ qua” việc xác lập địa vị thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
          "B. Là sự phát triển quan hệ sản xuất",
          "C. Là “bỏ qua” sự phát triển lực lượng sản xuất",
          "D. Tất cả các đáp án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là sự “phát triển rút ngắn” và “bỏ qua” việc xác lập địa vị thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa"
          },
          {
            "letter": "B",
            "text": "Là sự phát triển quan hệ sản xuất"
          },
          {
            "letter": "C",
            "text": "Là “bỏ qua” sự phát triển lực lượng sản xuất"
          },
          {
            "letter": "D",
            "text": "Tất cả các đáp án"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Là sự “phát triển rút ngắn” và “bỏ qua” việc xác lập địa vị thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa"
      },
      {
        "q_num": 10,
        "orig_id": 101,
        "title_raw": "Câu 10.[!b:$ Quan hệ sản xuất biểu hiện:$]",
        "clean_text": "Quan hệ sản xuất biểu hiện:",
        "options_raw": [
          "A. Tất cả các phương án",
          "*B. Quan hệ kinh tế giữa ng¬ười với ngư¬ời trong quá trình sản xuất",
          "C. Quan hệ giữa ng¬ười với ng¬ười trong xã hội",
          "D. Quan hệ giữa con ng¬ười với tự nhiên"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Quan hệ kinh tế giữa ng¬ười với ngư¬ời trong quá trình sản xuất"
          },
          {
            "letter": "C",
            "text": "Quan hệ giữa ng¬ười với ng¬ười trong xã hội"
          },
          {
            "letter": "D",
            "text": "Quan hệ giữa con ng¬ười với tự nhiên"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Quan hệ kinh tế giữa ng¬ười với ngư¬ời trong quá trình sản xuất"
      },
      {
        "q_num": 11,
        "orig_id": 85,
        "title_raw": "Câu 11.[!b:$ Hoàn thiện định nghĩa: Tồn tại xã hội là toàn bộ…… và quan hệ vật chất của xã hội trong từng giai đoạn lịch sử nhất định:$]",
        "clean_text": "Hoàn thiện định nghĩa: Tồn tại xã hội là toàn bộ…… và quan hệ vật chất của xã hội trong từng giai đoạn lịch sử nhất định:",
        "options_raw": [
          "*A. Điều kiện sinh hoạt vật chất",
          "B. Quan hệ tinh thần",
          "C. Điều kiện tinh thần",
          "D. Vật chất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Điều kiện sinh hoạt vật chất"
          },
          {
            "letter": "B",
            "text": "Quan hệ tinh thần"
          },
          {
            "letter": "C",
            "text": "Điều kiện tinh thần"
          },
          {
            "letter": "D",
            "text": "Vật chất"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Điều kiện sinh hoạt vật chất"
      },
      {
        "q_num": 12,
        "orig_id": 4,
        "title_raw": "Câu 12.[!b:$ Chọn phương án đúng về tính độc lập tương đối của ý thức xã hội:$]",
        "clean_text": "Chọn phương án đúng về tính độc lập tương đối của ý thức xã hội:",
        "options_raw": [
          "A. Tồn tại xã hội thay đổi nhưng có một số bộ phận của ý thức xã hội chưa thay đổi ngay cùng với tồn tại xã hội.",
          "B. Những tư tưởng khoa học tiên tiến có thể vượt trước sự phát triển của tồn tại xã hội nên",
          "C. Các hình thái ý thức xã hội trong sự phát triển có tác động qua lại lẫn nhau.",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tồn tại xã hội thay đổi nhưng có một số bộ phận của ý thức xã hội chưa thay đổi ngay cùng với tồn tại xã hội."
          },
          {
            "letter": "B",
            "text": "Những tư tưởng khoa học tiên tiến có thể vượt trước sự phát triển của tồn tại xã hội nên"
          },
          {
            "letter": "C",
            "text": "Các hình thái ý thức xã hội trong sự phát triển có tác động qua lại lẫn nhau."
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 13,
        "orig_id": 36,
        "title_raw": "Câu 13.[!b:$ Kiến trúc thượng tầng tác động tới cơ sở hạ tầng theo chiều hướng nào?$]",
        "clean_text": "Kiến trúc thượng tầng tác động tới cơ sở hạ tầng theo chiều hướng nào?",
        "options_raw": [
          "A. Tích cực",
          "*B. Cả tích cực và tiêu cực",
          "C. Tiêu cực",
          "D. Không tác động"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tích cực"
          },
          {
            "letter": "B",
            "text": "Cả tích cực và tiêu cực"
          },
          {
            "letter": "C",
            "text": "Tiêu cực"
          },
          {
            "letter": "D",
            "text": "Không tác động"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Cả tích cực và tiêu cực"
      },
      {
        "q_num": 14,
        "orig_id": 25,
        "title_raw": "Câu 14.[!b:$ Các hình thức của quan hệ giai cấp trong xã hội có giai cấp:$]",
        "clean_text": "Các hình thức của quan hệ giai cấp trong xã hội có giai cấp:",
        "options_raw": [
          "A. Kết hợp giai cấp.",
          "B. Liên minh giai cấp.",
          "C. Đấu tranh giai cấp.",
          "*D. Liên minh giai cấp và đấu tranh giai cấp"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Kết hợp giai cấp."
          },
          {
            "letter": "B",
            "text": "Liên minh giai cấp."
          },
          {
            "letter": "C",
            "text": "Đấu tranh giai cấp."
          },
          {
            "letter": "D",
            "text": "Liên minh giai cấp và đấu tranh giai cấp"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Liên minh giai cấp và đấu tranh giai cấp"
      },
      {
        "q_num": 15,
        "orig_id": 163,
        "title_raw": "Câu 15.[!b:$ Điền từ thích hợp vào chỗ trống theo quan điểm Đại hội XIII của Đảng: “Phát huy nhân tố con người, lấy nhân dân làm …….; phát huy vai trò của văn hóa - nền tảng tinh thần của xã hội, là mục tiêu, động lực của sự phát triển”?$]",
        "clean_text": "Điền từ thích hợp vào chỗ trống theo quan điểm Đại hội XIII của Đảng: “Phát huy nhân tố con người, lấy nhân dân làm …….; phát huy vai trò của văn hóa - nền tảng tinh thần của xã hội, là mục tiêu, động lực của sự phát triển”?",
        "options_raw": [
          "A. Hạt nhân",
          "B. Nòng cốt",
          "*C. Trung tâm",
          "D. Nền tảng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hạt nhân"
          },
          {
            "letter": "B",
            "text": "Nòng cốt"
          },
          {
            "letter": "C",
            "text": "Trung tâm"
          },
          {
            "letter": "D",
            "text": "Nền tảng"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Trung tâm"
      },
      {
        "q_num": 16,
        "orig_id": 115,
        "title_raw": "Câu 16.[!b:$ Một chu kỳ của quá trình phủ định được thực hiện qua mấy lần phủ định cơ bản:$]",
        "clean_text": "Một chu kỳ của quá trình phủ định được thực hiện qua mấy lần phủ định cơ bản:",
        "options_raw": [
          "A. Ít nhất một lần",
          "*B. Hai lần cơ bản",
          "C. Sự vật nào cũng có 3 lần phủ định cơ bản",
          "D. Một lần"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Ít nhất một lần"
          },
          {
            "letter": "B",
            "text": "Hai lần cơ bản"
          },
          {
            "letter": "C",
            "text": "Sự vật nào cũng có 3 lần phủ định cơ bản"
          },
          {
            "letter": "D",
            "text": "Một lần"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Hai lần cơ bản"
      },
      {
        "q_num": 17,
        "orig_id": 185,
        "title_raw": "Câu 17.[!b:$ Quan điểm toàn diện, quan điểm phát triển, quan điểm lịch sử - cụ thể là những nguyên tắc phương pháp luận được rút ra từ nội dung nào của triết học Mác - Lênin:$]",
        "clean_text": "Quan điểm toàn diện, quan điểm phát triển, quan điểm lịch sử - cụ thể là những nguyên tắc phương pháp luận được rút ra từ nội dung nào của triết học Mác - Lênin:",
        "options_raw": [
          "A. Từ 3 quy luật của phép biện chứng duy vật",
          "B. Tất cả các phương án",
          "*C. Từ nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển",
          "D. Từ nguyên lý thống nhất giữa lý luận và thực tiễn"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Từ 3 quy luật của phép biện chứng duy vật"
          },
          {
            "letter": "B",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "C",
            "text": "Từ nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển"
          },
          {
            "letter": "D",
            "text": "Từ nguyên lý thống nhất giữa lý luận và thực tiễn"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Từ nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển"
      },
      {
        "q_num": 18,
        "orig_id": 76,
        "title_raw": "Câu 18.[!b:$ Phạm trù vật chất theo triết học Mác- Lênin được hiểu đúng và đầy đủ là:$]",
        "clean_text": "Phạm trù vật chất theo triết học Mác- Lênin được hiểu đúng và đầy đủ là:",
        "options_raw": [
          "*A. Là sự khái quát trong quá trình nhận thức của con người đối với thế giới khách quan",
          "B. Là toàn bộ thế giới khách quan",
          "C. Là toàn bộ thế giới vật chất",
          "D. Là hình thức phản ánh đối lập với thế giới vật chất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là sự khái quát trong quá trình nhận thức của con người đối với thế giới khách quan"
          },
          {
            "letter": "B",
            "text": "Là toàn bộ thế giới khách quan"
          },
          {
            "letter": "C",
            "text": "Là toàn bộ thế giới vật chất"
          },
          {
            "letter": "D",
            "text": "Là hình thức phản ánh đối lập với thế giới vật chất"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Là sự khái quát trong quá trình nhận thức của con người đối với thế giới khách quan"
      },
      {
        "q_num": 19,
        "orig_id": 177,
        "title_raw": "Câu 19.[!b:$ Vai trò tác động trở lại của quan hệ sản xuất với lực lượng sản xuất:$]",
        "clean_text": "Vai trò tác động trở lại của quan hệ sản xuất với lực lượng sản xuất:",
        "options_raw": [
          "A. Hình thành hệ thống động lực thúc đẩy lực lượng sản xuất phát triển",
          "B. Quy định mục đích, tính chất của nền sản xuất",
          "*C. Tất cả các phương án",
          "D. Quy định khuynh hướng phát triển của sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hình thành hệ thống động lực thúc đẩy lực lượng sản xuất phát triển"
          },
          {
            "letter": "B",
            "text": "Quy định mục đích, tính chất của nền sản xuất"
          },
          {
            "letter": "C",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "D",
            "text": "Quy định khuynh hướng phát triển của sản xuất"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 20,
        "orig_id": 188,
        "title_raw": "Câu 20.[!b:$ Cơ sở lý luận của tính quy luật giành thắng lợi từng bước tiến lên giành thắng lợi hoàn toàn trong chiến tranh nhân dân Việt Nam:$]",
        "clean_text": "Cơ sở lý luận của tính quy luật giành thắng lợi từng bước tiến lên giành thắng lợi hoàn toàn trong chiến tranh nhân dân Việt Nam:",
        "options_raw": [
          "A. Quy luật mâu thuẫn",
          "B. Quy luật phủ định của phủ định",
          "*C. Quy luật lượng - chất",
          "D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật mâu thuẫn"
          },
          {
            "letter": "B",
            "text": "Quy luật phủ định của phủ định"
          },
          {
            "letter": "C",
            "text": "Quy luật lượng - chất"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Quy luật lượng - chất"
      },
      {
        "q_num": 21,
        "orig_id": 79,
        "title_raw": "Câu 21.[!b:$ Quan điểm sau đây thuộc lập trường triết học nào: Trong nhận thức và hoạt động thực tiễn phải lấy hiện thực khách quan làm căn cứ hoạt động:$]",
        "clean_text": "Quan điểm sau đây thuộc lập trường triết học nào: Trong nhận thức và hoạt động thực tiễn phải lấy hiện thực khách quan làm căn cứ hoạt động:",
        "options_raw": [
          "A. Chủ nghĩa duy tâm",
          "*B. Chủ nghĩa duy vật biện chứng",
          "C. Chủ nghĩa duy vật siêu hình",
          "D. Chủ nghĩa duy vật mộc mạc"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chủ nghĩa duy tâm"
          },
          {
            "letter": "B",
            "text": "Chủ nghĩa duy vật biện chứng"
          },
          {
            "letter": "C",
            "text": "Chủ nghĩa duy vật siêu hình"
          },
          {
            "letter": "D",
            "text": "Chủ nghĩa duy vật mộc mạc"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Chủ nghĩa duy vật biện chứng"
      },
      {
        "q_num": 22,
        "orig_id": 50,
        "title_raw": "Câu 22.[!b:$ Xác định quan niệm sai về phủ định biện chứng:$]",
        "clean_text": "Xác định quan niệm sai về phủ định biện chứng:",
        "options_raw": [
          "A. Phủ định có tính khách quan, phổ biến",
          "*B. Phủ định là chấm dứt sự phát triển",
          "C. Phủ định có tính kế thừa",
          "D. Phủ định đồng thời cũng là khẳng định"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phủ định có tính khách quan, phổ biến"
          },
          {
            "letter": "B",
            "text": "Phủ định là chấm dứt sự phát triển"
          },
          {
            "letter": "C",
            "text": "Phủ định có tính kế thừa"
          },
          {
            "letter": "D",
            "text": "Phủ định đồng thời cũng là khẳng định"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Phủ định là chấm dứt sự phát triển"
      },
      {
        "q_num": 23,
        "orig_id": 22,
        "title_raw": "Câu 23.[!b:$ Điều kiện thuận lợi cơ bản nhất của đấu tranh giai cấp của giai cấp vô sản trong thời kỳ quá độ:$]",
        "clean_text": "Điều kiện thuận lợi cơ bản nhất của đấu tranh giai cấp của giai cấp vô sản trong thời kỳ quá độ:",
        "options_raw": [
          "A. Giai cấp thống trị phản động bị lật đổ",
          "*B. Giai cấp vô sản đã giành được chính quyền",
          "C. Có sự lãnh đạo của Đảng cộng sản.",
          "D. Sự ủng hộ giúp đỡ của giai cấp vô sản quốc tế."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giai cấp thống trị phản động bị lật đổ"
          },
          {
            "letter": "B",
            "text": "Giai cấp vô sản đã giành được chính quyền"
          },
          {
            "letter": "C",
            "text": "Có sự lãnh đạo của Đảng cộng sản."
          },
          {
            "letter": "D",
            "text": "Sự ủng hộ giúp đỡ của giai cấp vô sản quốc tế."
          }
        ],
        "correct_letter": "B",
        "correct_text": "Giai cấp vô sản đã giành được chính quyền"
      },
      {
        "q_num": 24,
        "orig_id": 14,
        "title_raw": "Câu 24.[!b:$ Muốn nhận thức bản chất con người thì phải:$]",
        "clean_text": "Muốn nhận thức bản chất con người thì phải:",
        "options_raw": [
          "A. Tất cả các phương án",
          "B. Thông qua tồn tại xã hội của con người.",
          "C. Thông qua phẩm chất và năng lực của con người,",
          "*D. Thông qua các quan hệ xã hội hiện thực của con người."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Thông qua tồn tại xã hội của con người."
          },
          {
            "letter": "C",
            "text": "Thông qua phẩm chất và năng lực của con người,"
          },
          {
            "letter": "D",
            "text": "Thông qua các quan hệ xã hội hiện thực của con người."
          }
        ],
        "correct_letter": "D",
        "correct_text": "Thông qua các quan hệ xã hội hiện thực của con người."
      },
      {
        "q_num": 25,
        "orig_id": 44,
        "title_raw": "Câu 25.[!b:$ Quan hệ sản xuất bao gồm:$]",
        "clean_text": "Quan hệ sản xuất bao gồm:",
        "options_raw": [
          "A. Quan hệ giữa người với người trong đời sống xã hội.",
          "B. Quan hệ giữa con người với tự nhiên và con người với con người.",
          "*C. Các quan hệ giữa người với người trong quá trình sản xuất.",
          "D. Quan hệ giữa con người với con người trong quá trình sản xuất, lưu thông, tiêu dùng hàng hoá."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan hệ giữa người với người trong đời sống xã hội."
          },
          {
            "letter": "B",
            "text": "Quan hệ giữa con người với tự nhiên và con người với con người."
          },
          {
            "letter": "C",
            "text": "Các quan hệ giữa người với người trong quá trình sản xuất."
          },
          {
            "letter": "D",
            "text": "Quan hệ giữa con người với con người trong quá trình sản xuất, lưu thông, tiêu dùng hàng hoá."
          }
        ],
        "correct_letter": "C",
        "correct_text": "Các quan hệ giữa người với người trong quá trình sản xuất."
      },
      {
        "q_num": 26,
        "orig_id": 39,
        "title_raw": "Câu 26.[!b:$ Quan hệ vật chất và quan hệ tinh thần của xã hội được khái quát trong phạm trù nào?$]",
        "clean_text": "Quan hệ vật chất và quan hệ tinh thần của xã hội được khái quát trong phạm trù nào?",
        "options_raw": [
          "*A. Cơ sở hạ tầng, kiến trúc thượng tầng của xã hội",
          "B. Quan hệ kinh tế và quan hệ chính trị",
          "C. Quan hệ sản xuất, quan hệ chính trị",
          "D. Quan hệ đạo đức, tôn giáo"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cơ sở hạ tầng, kiến trúc thượng tầng của xã hội"
          },
          {
            "letter": "B",
            "text": "Quan hệ kinh tế và quan hệ chính trị"
          },
          {
            "letter": "C",
            "text": "Quan hệ sản xuất, quan hệ chính trị"
          },
          {
            "letter": "D",
            "text": "Quan hệ đạo đức, tôn giáo"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Cơ sở hạ tầng, kiến trúc thượng tầng của xã hội"
      },
      {
        "q_num": 27,
        "orig_id": 17,
        "title_raw": "Câu 27.[!b:$ Tiêu chí cơ bản để đánh giá giai cấp cách mạng:$]",
        "clean_text": "Tiêu chí cơ bản để đánh giá giai cấp cách mạng:",
        "options_raw": [
          "*A. Có khả năng giải phóng lực lượng sản xuất bị kìm hãm trong phương thức sản xuất cũ lạc hậu.",
          "B. Nghèo nhất trong xã hội.",
          "C. Có tinh thần cách mạng",
          "D. Bị thống trị bóc lột."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Có khả năng giải phóng lực lượng sản xuất bị kìm hãm trong phương thức sản xuất cũ lạc hậu."
          },
          {
            "letter": "B",
            "text": "Nghèo nhất trong xã hội."
          },
          {
            "letter": "C",
            "text": "Có tinh thần cách mạng"
          },
          {
            "letter": "D",
            "text": "Bị thống trị bóc lột."
          }
        ],
        "correct_letter": "A",
        "correct_text": "Có khả năng giải phóng lực lượng sản xuất bị kìm hãm trong phương thức sản xuất cũ lạc hậu."
      },
      {
        "q_num": 28,
        "orig_id": 45,
        "title_raw": "Câu 28.[!b:$ Các phạm trù nào sau đây thuộc lĩnh vực chính trị của đời sống xã hội:$]",
        "clean_text": "Các phạm trù nào sau đây thuộc lĩnh vực chính trị của đời sống xã hội:",
        "options_raw": [
          "A. Quan hệ xã hội, quan hệ sản xuất, quan hệ thẩm mỹ",
          "B. Quan hệ kinh tế",
          "*C. Giai cấp, đấu tranh giai cấp, cách mạng xã hội, nhà nước",
          "D. Đạo đức, nghệ thuật, tôn giáo, triết học"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan hệ xã hội, quan hệ sản xuất, quan hệ thẩm mỹ"
          },
          {
            "letter": "B",
            "text": "Quan hệ kinh tế"
          },
          {
            "letter": "C",
            "text": "Giai cấp, đấu tranh giai cấp, cách mạng xã hội, nhà nước"
          },
          {
            "letter": "D",
            "text": "Đạo đức, nghệ thuật, tôn giáo, triết học"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Giai cấp, đấu tranh giai cấp, cách mạng xã hội, nhà nước"
      },
      {
        "q_num": 29,
        "orig_id": 53,
        "title_raw": "Câu 29.[!b:$ Nội dung của quá trình sản xuất vật chất là gì?$]",
        "clean_text": "Nội dung của quá trình sản xuất vật chất là gì?",
        "options_raw": [
          "A. Tư liệu sản xuất và quan hệ giữa người với người đối với tư liệu sản xuất",
          "B. Tư liệu sản xuất và tổ chức, quản lý sản xuất",
          "C. Tư liệu sản xuất và con người",
          "*D. Tư liệu sản xuất và người lao động với kỹ năng lao động tương ứng với công cụ lao động"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tư liệu sản xuất và quan hệ giữa người với người đối với tư liệu sản xuất"
          },
          {
            "letter": "B",
            "text": "Tư liệu sản xuất và tổ chức, quản lý sản xuất"
          },
          {
            "letter": "C",
            "text": "Tư liệu sản xuất và con người"
          },
          {
            "letter": "D",
            "text": "Tư liệu sản xuất và người lao động với kỹ năng lao động tương ứng với công cụ lao động"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tư liệu sản xuất và người lao động với kỹ năng lao động tương ứng với công cụ lao động"
      },
      {
        "q_num": 30,
        "orig_id": 186,
        "title_raw": "Câu 30.[!b:$ Chọn phương án trả lời chính xác nhất:$]",
        "clean_text": "Chọn phương án trả lời chính xác nhất:",
        "options_raw": [
          "A. Phủ định biện chứng là chỉ hình thành trong các quy luật toán học.",
          "B. Phủ định biện chứng là chỉ phổ biến trong tư duy",
          "C. Phủ định biện chứng là phổ biến ở mọi sự vật, hiện tượng",
          "*D. Phủ định biện chứng có khuynh hướng phổ biến trong sự phát triển của sự vật, hiện tượng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phủ định biện chứng là chỉ hình thành trong các quy luật toán học."
          },
          {
            "letter": "B",
            "text": "Phủ định biện chứng là chỉ phổ biến trong tư duy"
          },
          {
            "letter": "C",
            "text": "Phủ định biện chứng là phổ biến ở mọi sự vật, hiện tượng"
          },
          {
            "letter": "D",
            "text": "Phủ định biện chứng có khuynh hướng phổ biến trong sự phát triển của sự vật, hiện tượng"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Phủ định biện chứng có khuynh hướng phổ biến trong sự phát triển của sự vật, hiện tượng"
      }
    ]
  },
  {
    "test_num": 2,
    "title": "Đề trắc nghiệm số 2",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 112,
        "title_raw": "Câu 1.[!b:$ Đâu là yếu tố không thuộc về quan hệ sản xuất:$]",
        "clean_text": "Đâu là yếu tố không thuộc về quan hệ sản xuất:",
        "options_raw": [
          "A. Quan hệ trong phân phối sản phẩm lao động",
          "B. Quan hệ trong tổ chức và quản lý sản xuất",
          "C. Quan hệ về sở hữu đối với tư liệu sản xuất",
          "*D. Quan hệ kinh tế và chính trị"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan hệ trong phân phối sản phẩm lao động"
          },
          {
            "letter": "B",
            "text": "Quan hệ trong tổ chức và quản lý sản xuất"
          },
          {
            "letter": "C",
            "text": "Quan hệ về sở hữu đối với tư liệu sản xuất"
          },
          {
            "letter": "D",
            "text": "Quan hệ kinh tế và chính trị"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Quan hệ kinh tế và chính trị"
      },
      {
        "q_num": 2,
        "orig_id": 43,
        "title_raw": "Câu 2.[!b:$ Tại sao lực lượng sản xuất quyết định đối với quan hệ sản xuất:$]",
        "clean_text": "Tại sao lực lượng sản xuất quyết định đối với quan hệ sản xuất:",
        "options_raw": [
          "*A. Lực lượng sản xuất là nội dung, quan hệ sản xuất là hình thức xã hội của quá trình sản xuất. lực lượng sản xuất là yếu tố năng động, cách mạng, thường xuyên vận động, phát triển",
          "B. Lực lượng sản xuất có trước quan hệ sản xuất",
          "C. Không phương án nào đúng",
          "D. Không có lực lực lượng sản xuất thì không có quan hệ sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lực lượng sản xuất là nội dung, quan hệ sản xuất là hình thức xã hội của quá trình sản xuất. lực lượng sản xuất là yếu tố năng động, cách mạng, thường xuyên vận động, phát triển"
          },
          {
            "letter": "B",
            "text": "Lực lượng sản xuất có trước quan hệ sản xuất"
          },
          {
            "letter": "C",
            "text": "Không phương án nào đúng"
          },
          {
            "letter": "D",
            "text": "Không có lực lực lượng sản xuất thì không có quan hệ sản xuất"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Lực lượng sản xuất là nội dung, quan hệ sản xuất là hình thức xã hội của quá trình sản xuất. lực lượng sản xuất là yếu tố năng động, cách mạng, thường xuyên vận động, phát triển"
      },
      {
        "q_num": 3,
        "orig_id": 200,
        "title_raw": "Câu 3.[!b:$ Yếu tố quan trọng nhất của khái niệm khách quan:$]",
        "clean_text": "Yếu tố quan trọng nhất của khái niệm khách quan:",
        "options_raw": [
          "A. Không phương án nào đúng",
          "B. Khả năng khách quan",
          "*C. Quy luật khách quan",
          "D. Điều kiện khách quan"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Không phương án nào đúng"
          },
          {
            "letter": "B",
            "text": "Khả năng khách quan"
          },
          {
            "letter": "C",
            "text": "Quy luật khách quan"
          },
          {
            "letter": "D",
            "text": "Điều kiện khách quan"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Quy luật khách quan"
      },
      {
        "q_num": 4,
        "orig_id": 15,
        "title_raw": "Câu 4.[!b:$ Nguyên nhân xét đến cùng của những hành động chính trị trong xã hội:$]",
        "clean_text": "Nguyên nhân xét đến cùng của những hành động chính trị trong xã hội:",
        "options_raw": [
          "A. Chính trị",
          "*B. Kinh tế",
          "C. Tư tưởng",
          "D. Lợi ích"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chính trị"
          },
          {
            "letter": "B",
            "text": "Kinh tế"
          },
          {
            "letter": "C",
            "text": "Tư tưởng"
          },
          {
            "letter": "D",
            "text": "Lợi ích"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Kinh tế"
      },
      {
        "q_num": 5,
        "orig_id": 106,
        "title_raw": "Câu 5.[!b:$ Vai trò quyết định của cơ sở hạ tầng đối với kiến trúc thượng tầng thể hiện như thế nào?$]",
        "clean_text": "Vai trò quyết định của cơ sở hạ tầng đối với kiến trúc thượng tầng thể hiện như thế nào?",
        "options_raw": [
          "A. Kiến trúc thượng tầng làm thay đổi cơ sở hạ tầng",
          "B. Đấu tranh chính trị là nguyên nhân của đấu tranh kinh tế",
          "*C. Mỗi cơ sở hạ tầng hình thành nên kiến trúc thượng tầng tương ứng",
          "D. Chính sách kinh tế quyết định tình trạng kinh tế của xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Kiến trúc thượng tầng làm thay đổi cơ sở hạ tầng"
          },
          {
            "letter": "B",
            "text": "Đấu tranh chính trị là nguyên nhân của đấu tranh kinh tế"
          },
          {
            "letter": "C",
            "text": "Mỗi cơ sở hạ tầng hình thành nên kiến trúc thượng tầng tương ứng"
          },
          {
            "letter": "D",
            "text": "Chính sách kinh tế quyết định tình trạng kinh tế của xã hội"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Mỗi cơ sở hạ tầng hình thành nên kiến trúc thượng tầng tương ứng"
      },
      {
        "q_num": 6,
        "orig_id": 32,
        "title_raw": "Câu 6.[!b:$ Để xây dựng chế độ công hữu theo quan điểm duy vật biện chứng phải làm gì?$]",
        "clean_text": "Để xây dựng chế độ công hữu theo quan điểm duy vật biện chứng phải làm gì?",
        "options_raw": [
          "*A. Thiết lập sự thống nhất giữa sở hữu xã hội với sở hữu cá nhân về tư liệu sản xuất",
          "B. Xoá bỏ chế độ tư hữu và sở hữu cá nhân nói chung",
          "C. Xoá bỏ chế độ tư hữu nói chung",
          "D. Thiết lập sở hữu toàn dân và hoàn toàn xóa bỏ sở hữu cá nhân"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thiết lập sự thống nhất giữa sở hữu xã hội với sở hữu cá nhân về tư liệu sản xuất"
          },
          {
            "letter": "B",
            "text": "Xoá bỏ chế độ tư hữu và sở hữu cá nhân nói chung"
          },
          {
            "letter": "C",
            "text": "Xoá bỏ chế độ tư hữu nói chung"
          },
          {
            "letter": "D",
            "text": "Thiết lập sở hữu toàn dân và hoàn toàn xóa bỏ sở hữu cá nhân"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Thiết lập sự thống nhất giữa sở hữu xã hội với sở hữu cá nhân về tư liệu sản xuất"
      },
      {
        "q_num": 7,
        "orig_id": 181,
        "title_raw": "Câu 7.[!b:$ Thêm cụm từ thích hợp để hoàn chỉnh định nghĩa: “Thực tiễn là toàn bộ những ........... của con người nhằm cải tạo tự nhiên và xã hội”?$]",
        "clean_text": "Thêm cụm từ thích hợp để hoàn chỉnh định nghĩa: “Thực tiễn là toàn bộ những ........... của con người nhằm cải tạo tự nhiên và xã hội”?",
        "options_raw": [
          "*A. Hoạt động vật chất có mục đích, mang tính lịch sử - xã hội",
          "B. Hoạt động có mục đích",
          "C. Hoạt động.",
          "D. Hoạt động vật chất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hoạt động vật chất có mục đích, mang tính lịch sử - xã hội"
          },
          {
            "letter": "B",
            "text": "Hoạt động có mục đích"
          },
          {
            "letter": "C",
            "text": "Hoạt động."
          },
          {
            "letter": "D",
            "text": "Hoạt động vật chất"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Hoạt động vật chất có mục đích, mang tính lịch sử - xã hội"
      },
      {
        "q_num": 8,
        "orig_id": 172,
        "title_raw": "Câu 8.[!b:$ Bài học kinh nghiệm mà Đảng ta đã rút ra trong công cuộc đổi mới là gì?$]",
        "clean_text": "Bài học kinh nghiệm mà Đảng ta đã rút ra trong công cuộc đổi mới là gì?",
        "options_raw": [
          "A. Cứ đổi mới kinh tế, chính trị sẽ tự nó đổi mới theo.",
          "B. Không phương án nào đúng",
          "*C. Đổi mới kinh tế trước, đổi mới chính trị sau.",
          "D. Đổi mới chính trị trước, đổi mới kinh tế sau."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cứ đổi mới kinh tế, chính trị sẽ tự nó đổi mới theo."
          },
          {
            "letter": "B",
            "text": "Không phương án nào đúng"
          },
          {
            "letter": "C",
            "text": "Đổi mới kinh tế trước, đổi mới chính trị sau."
          },
          {
            "letter": "D",
            "text": "Đổi mới chính trị trước, đổi mới kinh tế sau."
          }
        ],
        "correct_letter": "C",
        "correct_text": "Đổi mới kinh tế trước, đổi mới chính trị sau."
      },
      {
        "q_num": 9,
        "orig_id": 107,
        "title_raw": "Câu 9.[!b:$ Thực chất quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng:$]",
        "clean_text": "Thực chất quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng:",
        "options_raw": [
          "A. Quan hệ giữa tồn tại xã hội với ý thức xã hội",
          "*B. Quan hệ giữa kinh tế và chính trị",
          "C. Quan hệ giữa vật chất và tinh thần",
          "D. Quan hệ giữa đời sống vật chất và đời sống tinh thần của xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan hệ giữa tồn tại xã hội với ý thức xã hội"
          },
          {
            "letter": "B",
            "text": "Quan hệ giữa kinh tế và chính trị"
          },
          {
            "letter": "C",
            "text": "Quan hệ giữa vật chất và tinh thần"
          },
          {
            "letter": "D",
            "text": "Quan hệ giữa đời sống vật chất và đời sống tinh thần của xã hội"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Quan hệ giữa kinh tế và chính trị"
      },
      {
        "q_num": 10,
        "orig_id": 162,
        "title_raw": "Câu 10.[!b:$ Lựa chọn phương án sai về tính độc lập tương đối của ý thức xã hội:$]",
        "clean_text": "Lựa chọn phương án sai về tính độc lập tương đối của ý thức xã hội:",
        "options_raw": [
          "A. Có bộ phận của ý thức xã hội lạc hậu hơn so với tồn tại xã hội vì không phản ánh kịp hoạt động thực tiễn.",
          "B. Các loại hình thái ý thức xã hội có quan hệ với nhau và đều tác động trở lại tồn tại xã hội.",
          "*C. Giải thích một tư tưởng nào đó của ý thức xã hội chỉ cần dựa vào những quan hệ kinh tế hiện có",
          "D. Ý thức xã hội tác động trở lại tồn tại xã hội theo hai chiều hoặc thúc đẩy hoặc kìm hãm. Và mức độ tác động đó phụ thuộc vào điều kiện lịch sử cụ thể."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Có bộ phận của ý thức xã hội lạc hậu hơn so với tồn tại xã hội vì không phản ánh kịp hoạt động thực tiễn."
          },
          {
            "letter": "B",
            "text": "Các loại hình thái ý thức xã hội có quan hệ với nhau và đều tác động trở lại tồn tại xã hội."
          },
          {
            "letter": "C",
            "text": "Giải thích một tư tưởng nào đó của ý thức xã hội chỉ cần dựa vào những quan hệ kinh tế hiện có"
          },
          {
            "letter": "D",
            "text": "Ý thức xã hội tác động trở lại tồn tại xã hội theo hai chiều hoặc thúc đẩy hoặc kìm hãm. Và mức độ tác động đó phụ thuộc vào điều kiện lịch sử cụ thể."
          }
        ],
        "correct_letter": "C",
        "correct_text": "Giải thích một tư tưởng nào đó của ý thức xã hội chỉ cần dựa vào những quan hệ kinh tế hiện có"
      },
      {
        "q_num": 11,
        "orig_id": 121,
        "title_raw": "Câu 11.[!b:$ Khuynh hướng nôn nóng, vội vàng, không tích luỹ đủ lượng đã muốn thực hiện bước nhảy thể hiện tư tưởng gì?$]",
        "clean_text": "Khuynh hướng nôn nóng, vội vàng, không tích luỹ đủ lượng đã muốn thực hiện bước nhảy thể hiện tư tưởng gì?",
        "options_raw": [
          "*A. Tả khuynh",
          "B. Thỏa hiệp",
          "C. Dung hòa",
          "D. Hữu khuynh"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tả khuynh"
          },
          {
            "letter": "B",
            "text": "Thỏa hiệp"
          },
          {
            "letter": "C",
            "text": "Dung hòa"
          },
          {
            "letter": "D",
            "text": "Hữu khuynh"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tả khuynh"
      },
      {
        "q_num": 12,
        "orig_id": 18,
        "title_raw": "Câu 12.[!b:$ Vai trò của đấu tranh giai cấp trong lịch sử nhân loại:$]",
        "clean_text": "Vai trò của đấu tranh giai cấp trong lịch sử nhân loại:",
        "options_raw": [
          "A. Thay thế các hình thái kinh tế - xã hội từ thấp đến cao.",
          "B. Là động lực cơ bản của sự phát triển xã hội.",
          "*C. Là động lực quan trọng, trực tiếp của lịch sử",
          "D. Lật đổ ách thống trị của giai cấp thống trị"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thay thế các hình thái kinh tế - xã hội từ thấp đến cao."
          },
          {
            "letter": "B",
            "text": "Là động lực cơ bản của sự phát triển xã hội."
          },
          {
            "letter": "C",
            "text": "Là động lực quan trọng, trực tiếp của lịch sử"
          },
          {
            "letter": "D",
            "text": "Lật đổ ách thống trị của giai cấp thống trị"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Là động lực quan trọng, trực tiếp của lịch sử"
      },
      {
        "q_num": 13,
        "orig_id": 51,
        "title_raw": "Câu 13.[!b:$ Quan điểm “dĩ hòa vi quý” vi phạm lý luận nào?$]",
        "clean_text": "Quan điểm “dĩ hòa vi quý” vi phạm lý luận nào?",
        "options_raw": [
          "A. Quy luật phủ định của phủ định",
          "*B. Quy luật mâu thuẫn",
          "C. Nguyên lý về mối liên hệ phổ biến",
          "D. Nguyên lý về sự phát triển"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật phủ định của phủ định"
          },
          {
            "letter": "B",
            "text": "Quy luật mâu thuẫn"
          },
          {
            "letter": "C",
            "text": "Nguyên lý về mối liên hệ phổ biến"
          },
          {
            "letter": "D",
            "text": "Nguyên lý về sự phát triển"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Quy luật mâu thuẫn"
      },
      {
        "q_num": 14,
        "orig_id": 176,
        "title_raw": "Câu 14.[!b:$ Luận điểm: “Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên” được C.Mác nêu trong tác phẩm nào?$]",
        "clean_text": "Luận điểm: “Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên” được C.Mác nêu trong tác phẩm nào?",
        "options_raw": [
          "*A. Tư bản",
          "B. Hệ tư tưởng Đức",
          "C. Tuyên ngôn Đảng cộng sản",
          "D. Lời nói đầu góp phần phê phán khoa kinh tế chính trị"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tư bản"
          },
          {
            "letter": "B",
            "text": "Hệ tư tưởng Đức"
          },
          {
            "letter": "C",
            "text": "Tuyên ngôn Đảng cộng sản"
          },
          {
            "letter": "D",
            "text": "Lời nói đầu góp phần phê phán khoa kinh tế chính trị"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tư bản"
      },
      {
        "q_num": 15,
        "orig_id": 49,
        "title_raw": "Câu 15.[!b:$ Nghệ thuật quân sự Việt Nam thuộc lĩnh vực nào sau đây?$]",
        "clean_text": "Nghệ thuật quân sự Việt Nam thuộc lĩnh vực nào sau đây?",
        "options_raw": [
          "A. Tất cả các phương án",
          "B. Hành động quân sự",
          "C. Thực tiễn quân sự",
          "*D. Lý luận quân sự"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Hành động quân sự"
          },
          {
            "letter": "C",
            "text": "Thực tiễn quân sự"
          },
          {
            "letter": "D",
            "text": "Lý luận quân sự"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Lý luận quân sự"
      },
      {
        "q_num": 16,
        "orig_id": 8,
        "title_raw": "Câu 16.[!b:$ Tính lạc hậu của ý thức xã hội biểu hiện rõ nét nhất ở yếu tố nào?$]",
        "clean_text": "Tính lạc hậu của ý thức xã hội biểu hiện rõ nét nhất ở yếu tố nào?",
        "options_raw": [
          "*A. Tâm lý xã hội",
          "B. Hệ tư tưởng",
          "C. Tri thức, kinh nghiệm",
          "D. Quan điểm, tư tưởng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tâm lý xã hội"
          },
          {
            "letter": "B",
            "text": "Hệ tư tưởng"
          },
          {
            "letter": "C",
            "text": "Tri thức, kinh nghiệm"
          },
          {
            "letter": "D",
            "text": "Quan điểm, tư tưởng"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tâm lý xã hội"
      },
      {
        "q_num": 17,
        "orig_id": 120,
        "title_raw": "Câu 17.[!b:$ Quan điểm ủng hộ cái mới tiến bộ, chống lại cái cũ, lỗi thời được rút ra từ:$]",
        "clean_text": "Quan điểm ủng hộ cái mới tiến bộ, chống lại cái cũ, lỗi thời được rút ra từ:",
        "options_raw": [
          "A. Quy luật xã hội",
          "*B. Quy luật phủ định của phủ định",
          "C. Quy luật chuyển hoá từ những sự thay đổi về lượng thành sự thay đổi về chất và ngược lại",
          "D. Quy luật thống nhất và đấu tranh của các mặt đối lập"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật xã hội"
          },
          {
            "letter": "B",
            "text": "Quy luật phủ định của phủ định"
          },
          {
            "letter": "C",
            "text": "Quy luật chuyển hoá từ những sự thay đổi về lượng thành sự thay đổi về chất và ngược lại"
          },
          {
            "letter": "D",
            "text": "Quy luật thống nhất và đấu tranh của các mặt đối lập"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Quy luật phủ định của phủ định"
      },
      {
        "q_num": 18,
        "orig_id": 68,
        "title_raw": "Câu 18.[!b:$ Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:$]",
        "clean_text": "Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:",
        "options_raw": [
          "A. Quan điểm toàn diện yêu cầu chỉ cần đánh giá đúng vị trí, vai trò của những mối liên hệ cơ bản, chủ yếu của sự vât, hiện tượng là đủ",
          "B. Quan điểm toàn diện yêu cầu không cần đánh giá đúng vị trí, vai trò của từng mặt, từng yếu tố, từng mối liên hệ trong quá trình cấu thành sự vật, hiện tượng.",
          "C. Quan điểm toàn diện yêu cầu chỉ cần đánh giá những mối liên hệ bên ngoài là có thể đi tới kết luận bản chất của sự vật",
          "*D. Quan điểm toàn diện yêu cầu phải đánh giá đúng vị trí, vai trò của từng mặt, từng yếu tố, từng mối liên hệ của sự vật, hiện tượng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan điểm toàn diện yêu cầu chỉ cần đánh giá đúng vị trí, vai trò của những mối liên hệ cơ bản, chủ yếu của sự vât, hiện tượng là đủ"
          },
          {
            "letter": "B",
            "text": "Quan điểm toàn diện yêu cầu không cần đánh giá đúng vị trí, vai trò của từng mặt, từng yếu tố, từng mối liên hệ trong quá trình cấu thành sự vật, hiện tượng."
          },
          {
            "letter": "C",
            "text": "Quan điểm toàn diện yêu cầu chỉ cần đánh giá những mối liên hệ bên ngoài là có thể đi tới kết luận bản chất của sự vật"
          },
          {
            "letter": "D",
            "text": "Quan điểm toàn diện yêu cầu phải đánh giá đúng vị trí, vai trò của từng mặt, từng yếu tố, từng mối liên hệ của sự vật, hiện tượng"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Quan điểm toàn diện yêu cầu phải đánh giá đúng vị trí, vai trò của từng mặt, từng yếu tố, từng mối liên hệ của sự vật, hiện tượng"
      },
      {
        "q_num": 19,
        "orig_id": 137,
        "title_raw": "Câu 19.[!b:$ Lựa chọn câu đúng theo quan điểm của triết học Mác - Lênin:$]",
        "clean_text": "Lựa chọn câu đúng theo quan điểm của triết học Mác - Lênin:",
        "options_raw": [
          "*A. Mọi sự sáng tạo của con người đều bắt nguồn từ sự phản ánh đúng hiện thực khách quan, đồng thời phát huy tính năng động chủ quan",
          "B. Con người không sáng tạo mà chỉ bắt chước hiện thực khách quan",
          "C. Phát huy tính năng động chủ quan không phụ thuộc vào khách quan",
          "D. Sự sáng tạo của con người là có giới hạn bởi hiện thực khách quan"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mọi sự sáng tạo của con người đều bắt nguồn từ sự phản ánh đúng hiện thực khách quan, đồng thời phát huy tính năng động chủ quan"
          },
          {
            "letter": "B",
            "text": "Con người không sáng tạo mà chỉ bắt chước hiện thực khách quan"
          },
          {
            "letter": "C",
            "text": "Phát huy tính năng động chủ quan không phụ thuộc vào khách quan"
          },
          {
            "letter": "D",
            "text": "Sự sáng tạo của con người là có giới hạn bởi hiện thực khách quan"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Mọi sự sáng tạo của con người đều bắt nguồn từ sự phản ánh đúng hiện thực khách quan, đồng thời phát huy tính năng động chủ quan"
      },
      {
        "q_num": 20,
        "orig_id": 93,
        "title_raw": "Câu 20.[!b:$ Tiêu chuẩn cơ bản để phân biệt các giai cấp trong xã hội:$]",
        "clean_text": "Tiêu chuẩn cơ bản để phân biệt các giai cấp trong xã hội:",
        "options_raw": [
          "A. Mức sống",
          "B. Khác nhau về tài sản",
          "C. Thành phần xuất thân",
          "*D. Khác nhau về quan hệ sở hữu đối với tư liệu sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mức sống"
          },
          {
            "letter": "B",
            "text": "Khác nhau về tài sản"
          },
          {
            "letter": "C",
            "text": "Thành phần xuất thân"
          },
          {
            "letter": "D",
            "text": "Khác nhau về quan hệ sở hữu đối với tư liệu sản xuất"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Khác nhau về quan hệ sở hữu đối với tư liệu sản xuất"
      },
      {
        "q_num": 21,
        "orig_id": 73,
        "title_raw": "Câu 21.[!b:$ Chọn phương án trả lời đúng:$]",
        "clean_text": "Chọn phương án trả lời đúng:",
        "options_raw": [
          "A. Cả vật chất và ý thức đều là “hiện thực” nghĩa là đều tồn tại khách quan",
          "*B. Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan",
          "C. Ý thức con người có tính sáng tạo trong hiện thực nên nó sinh ra vật chất",
          "D. Ý thức là thuộc tính của một dạng vật chất có tổ chức cao là bộ óc con người nên ý thức cũng có tính vật chất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cả vật chất và ý thức đều là “hiện thực” nghĩa là đều tồn tại khách quan"
          },
          {
            "letter": "B",
            "text": "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan"
          },
          {
            "letter": "C",
            "text": "Ý thức con người có tính sáng tạo trong hiện thực nên nó sinh ra vật chất"
          },
          {
            "letter": "D",
            "text": "Ý thức là thuộc tính của một dạng vật chất có tổ chức cao là bộ óc con người nên ý thức cũng có tính vật chất"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan"
      },
      {
        "q_num": 22,
        "orig_id": 78,
        "title_raw": "Câu 22.[!b:$ Theo triết học Mác - Lênin, phương án nào sau đây là sai:$]",
        "clean_text": "Theo triết học Mác - Lênin, phương án nào sau đây là sai:",
        "options_raw": [
          "*A. Khách quan chỉ quy định chủ quan khi chủ quan tác động tới khách quan",
          "B. Giới hạn tính năng động chủ quan do khách quan quy định",
          "C. Khách quan quy định nội dung, sự vận động, biến đổi của chủ quan",
          "D. Khách quan là tiền đề, cơ sở, giữ vai trò quyết định đối với chủ quan"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Khách quan chỉ quy định chủ quan khi chủ quan tác động tới khách quan"
          },
          {
            "letter": "B",
            "text": "Giới hạn tính năng động chủ quan do khách quan quy định"
          },
          {
            "letter": "C",
            "text": "Khách quan quy định nội dung, sự vận động, biến đổi của chủ quan"
          },
          {
            "letter": "D",
            "text": "Khách quan là tiền đề, cơ sở, giữ vai trò quyết định đối với chủ quan"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Khách quan chỉ quy định chủ quan khi chủ quan tác động tới khách quan"
      },
      {
        "q_num": 23,
        "orig_id": 182,
        "title_raw": "Câu 23.[!b:$ Nếu trong hoạt động thực tiễn mà không coi trọng lý luận thì sẽ thế nào?$]",
        "clean_text": "Nếu trong hoạt động thực tiễn mà không coi trọng lý luận thì sẽ thế nào?",
        "options_raw": [
          "A. Rơi vào chủ nghĩa kinh nghiệm hẹp hòi.",
          "B. Rơi vào ảo tưởng.",
          "C. Tất cả các phương án",
          "*D. Rơi vào chủ nghĩa kinh viện giáo điều"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Rơi vào chủ nghĩa kinh nghiệm hẹp hòi."
          },
          {
            "letter": "B",
            "text": "Rơi vào ảo tưởng."
          },
          {
            "letter": "C",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "D",
            "text": "Rơi vào chủ nghĩa kinh viện giáo điều"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Rơi vào chủ nghĩa kinh viện giáo điều"
      },
      {
        "q_num": 24,
        "orig_id": 150,
        "title_raw": "Câu 24.[!b:$ Luận điểm “Đấu tranh, ngăn chặn, đẩy lùi sự suy thoái về tư tưởng, chính trị, đạo đức, lối sống, những biểu hiện “tự diễn biến”, “tự chuyển hóa” trong nội bộ” được nêu trong đại hội Đảng lần thứ mấy?$]",
        "clean_text": "Luận điểm “Đấu tranh, ngăn chặn, đẩy lùi sự suy thoái về tư tưởng, chính trị, đạo đức, lối sống, những biểu hiện “tự diễn biến”, “tự chuyển hóa” trong nội bộ” được nêu trong đại hội Đảng lần thứ mấy?",
        "options_raw": [
          "A. Lần thứ X",
          "B. Lần thứ XI",
          "*C. Lần thứ XIII",
          "D. Lần thứ XII"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lần thứ X"
          },
          {
            "letter": "B",
            "text": "Lần thứ XI"
          },
          {
            "letter": "C",
            "text": "Lần thứ XIII"
          },
          {
            "letter": "D",
            "text": "Lần thứ XII"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Lần thứ XIII"
      },
      {
        "q_num": 25,
        "orig_id": 6,
        "title_raw": "Câu 25.[!b:$ Sự tác động trở lại của ý thức xã hội đối với tồn tại xã hội phụ thuộc vào các yếu tố nào?$]",
        "clean_text": "Sự tác động trở lại của ý thức xã hội đối với tồn tại xã hội phụ thuộc vào các yếu tố nào?",
        "options_raw": [
          "A. Năng lực hiện thực hoá ý thức của các giai cấp và chính Đảng.",
          "B. Mức độ phù hợp của tư tưởng với hiện thực",
          "C. Sự xâm nhập của ý thức vào quần chúng cả bề rộng lẫn bề sâu.",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Năng lực hiện thực hoá ý thức của các giai cấp và chính Đảng."
          },
          {
            "letter": "B",
            "text": "Mức độ phù hợp của tư tưởng với hiện thực"
          },
          {
            "letter": "C",
            "text": "Sự xâm nhập của ý thức vào quần chúng cả bề rộng lẫn bề sâu."
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 26,
        "orig_id": 183,
        "title_raw": "Câu 26.[!b:$ Chọn phương án sai về đặc trưng của lý luận:$]",
        "clean_text": "Chọn phương án sai về đặc trưng của lý luận:",
        "options_raw": [
          "A. Cơ sở của lý luận là thực tiễn.",
          "B. Lý luận có tính hệ thống, tính khái quát cao, tính lôgic chặt chẽ.",
          "*C. Lý luận được hình thành từ tri thức kinh nghiệm",
          "D. Lý luận xét về bản chất có thể phản ánh được bản chất sự vật"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cơ sở của lý luận là thực tiễn."
          },
          {
            "letter": "B",
            "text": "Lý luận có tính hệ thống, tính khái quát cao, tính lôgic chặt chẽ."
          },
          {
            "letter": "C",
            "text": "Lý luận được hình thành từ tri thức kinh nghiệm"
          },
          {
            "letter": "D",
            "text": "Lý luận xét về bản chất có thể phản ánh được bản chất sự vật"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Lý luận được hình thành từ tri thức kinh nghiệm"
      },
      {
        "q_num": 27,
        "orig_id": 180,
        "title_raw": "Câu 27.[!b:$ Luận điểm: “Quan điểm về đời sống, về thực tiễn phải là quan điểm thứ nhất và cơ bản của lý luận nhận thức” của ai?$]",
        "clean_text": "Luận điểm: “Quan điểm về đời sống, về thực tiễn phải là quan điểm thứ nhất và cơ bản của lý luận nhận thức” của ai?",
        "options_raw": [
          "A. Ph. Ăngghen",
          "B. Hồ Chí Minh",
          "*C. V.I.Lênin",
          "D. C.Mác"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Ph. Ăngghen"
          },
          {
            "letter": "B",
            "text": "Hồ Chí Minh"
          },
          {
            "letter": "C",
            "text": "V.I.Lênin"
          },
          {
            "letter": "D",
            "text": "C.Mác"
          }
        ],
        "correct_letter": "C",
        "correct_text": "V.I.Lênin"
      },
      {
        "q_num": 28,
        "orig_id": 10,
        "title_raw": "Câu 28.[!b:$ Chọn phương án đúng điền vào chỗ trống: “Trong tính hiện thực của nó, bản chất con người là …….. của các mối quan hệ xã hội”:$]",
        "clean_text": "Chọn phương án đúng điền vào chỗ trống: “Trong tính hiện thực của nó, bản chất con người là …….. của các mối quan hệ xã hội”:",
        "options_raw": [
          "A. Tổng thể",
          "*B. Tổng hòa",
          "C. Toàn bộ",
          "D. Tổng hợp"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tổng thể"
          },
          {
            "letter": "B",
            "text": "Tổng hòa"
          },
          {
            "letter": "C",
            "text": "Toàn bộ"
          },
          {
            "letter": "D",
            "text": "Tổng hợp"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tổng hòa"
      },
      {
        "q_num": 29,
        "orig_id": 198,
        "title_raw": "Câu 29.[!b:$ Chọn phương án đúng: Biểu hiện của mối quan hệ khách quan - chủ quan trong lĩnh vực quân sự:$]",
        "clean_text": "Chọn phương án đúng: Biểu hiện của mối quan hệ khách quan - chủ quan trong lĩnh vực quân sự:",
        "options_raw": [
          "A. Mối quan hệ giữa tính năng động chủ quan của các chủ thể với điều kiện, hoàn cảnh chiến trường",
          "B. Mối quan hệ đối địch về tính năng động chủ quan của hai bên tham chiến",
          "C. Mối quan hệ giữa tính năng động chủ quan của các chủ thể quân sự với hệ thống các quy luật đặc biệt",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mối quan hệ giữa tính năng động chủ quan của các chủ thể với điều kiện, hoàn cảnh chiến trường"
          },
          {
            "letter": "B",
            "text": "Mối quan hệ đối địch về tính năng động chủ quan của hai bên tham chiến"
          },
          {
            "letter": "C",
            "text": "Mối quan hệ giữa tính năng động chủ quan của các chủ thể quân sự với hệ thống các quy luật đặc biệt"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 30,
        "orig_id": 69,
        "title_raw": "Câu 30.[!b:$ Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:$]",
        "clean_text": "Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:",
        "options_raw": [
          "A. Quan điểm toàn diện yêu cầu xem xét các mối liên hệ cơ bản, chủ yếu của sự vật là đủ, không cần phải xem xét các mối liên hệ khác",
          "*B. Quan điểm toàn diện yêu cầu phải xem xét tất cả các mặt, các yếu tố, các mối liên hệ và các giai đoạn phát triển của sự vật",
          "C. Quan điểm toàn diện yêu cầu phải xem xét các mối liên hệ không cơ bản, các giai đoạn phát triển để kết luận bản chất của sự vật",
          "D. Quan điểm toàn diện yêu cầu xem xét các mặt, các yếu tố, các mối liên hệ của sự vật là đủ, không cần phải xem xét các giai đoạn phát triển của sự vật"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan điểm toàn diện yêu cầu xem xét các mối liên hệ cơ bản, chủ yếu của sự vật là đủ, không cần phải xem xét các mối liên hệ khác"
          },
          {
            "letter": "B",
            "text": "Quan điểm toàn diện yêu cầu phải xem xét tất cả các mặt, các yếu tố, các mối liên hệ và các giai đoạn phát triển của sự vật"
          },
          {
            "letter": "C",
            "text": "Quan điểm toàn diện yêu cầu phải xem xét các mối liên hệ không cơ bản, các giai đoạn phát triển để kết luận bản chất của sự vật"
          },
          {
            "letter": "D",
            "text": "Quan điểm toàn diện yêu cầu xem xét các mặt, các yếu tố, các mối liên hệ của sự vật là đủ, không cần phải xem xét các giai đoạn phát triển của sự vật"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Quan điểm toàn diện yêu cầu phải xem xét tất cả các mặt, các yếu tố, các mối liên hệ và các giai đoạn phát triển của sự vật"
      }
    ]
  },
  {
    "test_num": 3,
    "title": "Đề trắc nghiệm số 3",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 104,
        "title_raw": "Câu 1.[!b:$ Theo quan điểm của triết học Mác - Lênin, phạm trù hình thái kinh tế - xã hội được áp dụng:$]",
        "clean_text": "Theo quan điểm của triết học Mác - Lênin, phạm trù hình thái kinh tế - xã hội được áp dụng:",
        "options_raw": [
          "*A. Cho mọi xã hội trong lịch sử",
          "B. Cho một xã hội cụ thể",
          "C. Cho xã hội cộng sản chủ nghĩa",
          "D. Cho xã hội tư bản chủ nghĩa"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cho mọi xã hội trong lịch sử"
          },
          {
            "letter": "B",
            "text": "Cho một xã hội cụ thể"
          },
          {
            "letter": "C",
            "text": "Cho xã hội cộng sản chủ nghĩa"
          },
          {
            "letter": "D",
            "text": "Cho xã hội tư bản chủ nghĩa"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Cho mọi xã hội trong lịch sử"
      },
      {
        "q_num": 2,
        "orig_id": 159,
        "title_raw": "Câu 2.[!b:$ Trong hoạt động thực tiễn sai lầm của trì trệ, bảo thủ là do không tôn trọng quy luật nào của phép biện chứng duy vật:$]",
        "clean_text": "Trong hoạt động thực tiễn sai lầm của trì trệ, bảo thủ là do không tôn trọng quy luật nào của phép biện chứng duy vật:",
        "options_raw": [
          "*A. Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
          "B. Quy luật mâu thuẫn.",
          "C. Cả 3 quy luật trên",
          "D. Quy luật phủ định của phủ định."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại"
          },
          {
            "letter": "B",
            "text": "Quy luật mâu thuẫn."
          },
          {
            "letter": "C",
            "text": "Cả 3 quy luật trên"
          },
          {
            "letter": "D",
            "text": "Quy luật phủ định của phủ định."
          }
        ],
        "correct_letter": "A",
        "correct_text": "Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại"
      },
      {
        "q_num": 3,
        "orig_id": 134,
        "title_raw": "Câu 3.[!b:$ Phạm trù vật chất theo triết học Mác - Lênin được hiểu là:$]",
        "clean_text": "Phạm trù vật chất theo triết học Mác - Lênin được hiểu là:",
        "options_raw": [
          "A. Toàn bộ thế giới vật chất",
          "B. Toàn bộ thế giới khách quan",
          "*C. Là sự khái quát trong nhận thức của con người về thế giới khách quan",
          "D. Hình thức phản ánh đối lập với thế giới vật chất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Toàn bộ thế giới vật chất"
          },
          {
            "letter": "B",
            "text": "Toàn bộ thế giới khách quan"
          },
          {
            "letter": "C",
            "text": "Là sự khái quát trong nhận thức của con người về thế giới khách quan"
          },
          {
            "letter": "D",
            "text": "Hình thức phản ánh đối lập với thế giới vật chất"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Là sự khái quát trong nhận thức của con người về thế giới khách quan"
      },
      {
        "q_num": 4,
        "orig_id": 48,
        "title_raw": "Câu 4.[!b:$ Chọn phương án đúng về bản chất của nhận thức:$]",
        "clean_text": "Chọn phương án đúng về bản chất của nhận thức:",
        "options_raw": [
          "A. Nhận thức tùy vào năng lực bản thân",
          "B. Nhận thức là sự nỗ lực của từng cá nhân",
          "*C. Nhận thức trên cơ sở hoạt động thực tiễn của con người",
          "D. Nhận thức dựa vào tính phong phú của hiện thực khách quan"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nhận thức tùy vào năng lực bản thân"
          },
          {
            "letter": "B",
            "text": "Nhận thức là sự nỗ lực của từng cá nhân"
          },
          {
            "letter": "C",
            "text": "Nhận thức trên cơ sở hoạt động thực tiễn của con người"
          },
          {
            "letter": "D",
            "text": "Nhận thức dựa vào tính phong phú của hiện thực khách quan"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Nhận thức trên cơ sở hoạt động thực tiễn của con người"
      },
      {
        "q_num": 5,
        "orig_id": 199,
        "title_raw": "Câu 5.[!b:$ Yếu tố quan trọng nhất của khái niệm chủ quan:$]",
        "clean_text": "Yếu tố quan trọng nhất của khái niệm chủ quan:",
        "options_raw": [
          "A. Ý chí",
          "*B. Tri thức",
          "C. Động cơ",
          "D. Tình cảm"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Ý chí"
          },
          {
            "letter": "B",
            "text": "Tri thức"
          },
          {
            "letter": "C",
            "text": "Động cơ"
          },
          {
            "letter": "D",
            "text": "Tình cảm"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tri thức"
      },
      {
        "q_num": 6,
        "orig_id": 167,
        "title_raw": "Câu 6.[!b:$ Phương châm: “Chất lượng đào tạo của nhà trường là khả năng sẵn sàng chiến đấu của đơn vị” là sự vận dụng nguyên tắc nào?$]",
        "clean_text": "Phương châm: “Chất lượng đào tạo của nhà trường là khả năng sẵn sàng chiến đấu của đơn vị” là sự vận dụng nguyên tắc nào?",
        "options_raw": [
          "*A. Thống nhất giữa lý luận với thực tiễn",
          "B. Nguyên tắc lịch sử cụ thể",
          "C. Nguyên tắc khách quan",
          "D. Nguyên tắc toàn diện"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thống nhất giữa lý luận với thực tiễn"
          },
          {
            "letter": "B",
            "text": "Nguyên tắc lịch sử cụ thể"
          },
          {
            "letter": "C",
            "text": "Nguyên tắc khách quan"
          },
          {
            "letter": "D",
            "text": "Nguyên tắc toàn diện"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Thống nhất giữa lý luận với thực tiễn"
      },
      {
        "q_num": 7,
        "orig_id": 9,
        "title_raw": "Câu 7.[!b:$ Giải pháp phát huy nhân tố con người ở nước ta hiện nay là gì?$]",
        "clean_text": "Giải pháp phát huy nhân tố con người ở nước ta hiện nay là gì?",
        "options_raw": [
          "*A. Tất cả các phương án",
          "B. Quan tâm và giải quyết hài hoà lợi ích chính đáng của con người",
          "C. Đổi mới căn bản, toàn diện giáo dục và đào tạo, nâng cao chất lượng nguồn nhân lực, phát triển con người",
          "D. Thực hiện dân chủ hoá mọi mặt đời sống xã hội để phát huy nhân tố con người"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Quan tâm và giải quyết hài hoà lợi ích chính đáng của con người"
          },
          {
            "letter": "C",
            "text": "Đổi mới căn bản, toàn diện giáo dục và đào tạo, nâng cao chất lượng nguồn nhân lực, phát triển con người"
          },
          {
            "letter": "D",
            "text": "Thực hiện dân chủ hoá mọi mặt đời sống xã hội để phát huy nhân tố con người"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 8,
        "orig_id": 140,
        "title_raw": "Câu 8.[!b:$ Yếu tố nào không thuộc phạm trù khách quan:$]",
        "clean_text": "Yếu tố nào không thuộc phạm trù khách quan:",
        "options_raw": [
          "*A. Tư duy của chủ thể",
          "B. Khả năng khách quan",
          "C. Điều kiện khách quan",
          "D. Quy luật khách quan"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tư duy của chủ thể"
          },
          {
            "letter": "B",
            "text": "Khả năng khách quan"
          },
          {
            "letter": "C",
            "text": "Điều kiện khách quan"
          },
          {
            "letter": "D",
            "text": "Quy luật khách quan"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tư duy của chủ thể"
      },
      {
        "q_num": 9,
        "orig_id": 55,
        "title_raw": "Câu 9.[!b:$ Quan hệ sản xuất được hình thành như thế nào?$]",
        "clean_text": "Quan hệ sản xuất được hình thành như thế nào?",
        "options_raw": [
          "A. Hình thành một cách khách quan không liên quan gì đến con người",
          "B. Do nhà nước định ra",
          "C. Do con người tự do thiết lập",
          "*D. Do con người thiết lập trên cơ sở trình độ phát triển của lực lượng sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hình thành một cách khách quan không liên quan gì đến con người"
          },
          {
            "letter": "B",
            "text": "Do nhà nước định ra"
          },
          {
            "letter": "C",
            "text": "Do con người tự do thiết lập"
          },
          {
            "letter": "D",
            "text": "Do con người thiết lập trên cơ sở trình độ phát triển của lực lượng sản xuất"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Do con người thiết lập trên cơ sở trình độ phát triển của lực lượng sản xuất"
      },
      {
        "q_num": 10,
        "orig_id": 155,
        "title_raw": "Câu 10.[!b:$ Hiện nay Việt Nam khẳng định đối tác là:$]",
        "clean_text": "Hiện nay Việt Nam khẳng định đối tác là:",
        "options_raw": [
          "A. Những nước xã hội chủ nghĩa và các nước đang phát triển giúp đỡ Việt Nam",
          "*B. Những ai tôn trọng độc lập, chủ quyền, thiết lập và mở rộng quan hệ hữu nghị, hợp tác, bình đẳng, cùng có lợi với Việt Nam",
          "C. Những quốc gia, vùng lãnh thổ, tổ chức phi chính phủ tạo điều kiện thuận lợi cho Việt Nam",
          "D. Những tổ chức, cá nhân tôn trọng giúp đỡ Việt Nam"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Những nước xã hội chủ nghĩa và các nước đang phát triển giúp đỡ Việt Nam"
          },
          {
            "letter": "B",
            "text": "Những ai tôn trọng độc lập, chủ quyền, thiết lập và mở rộng quan hệ hữu nghị, hợp tác, bình đẳng, cùng có lợi với Việt Nam"
          },
          {
            "letter": "C",
            "text": "Những quốc gia, vùng lãnh thổ, tổ chức phi chính phủ tạo điều kiện thuận lợi cho Việt Nam"
          },
          {
            "letter": "D",
            "text": "Những tổ chức, cá nhân tôn trọng giúp đỡ Việt Nam"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Những ai tôn trọng độc lập, chủ quyền, thiết lập và mở rộng quan hệ hữu nghị, hợp tác, bình đẳng, cùng có lợi với Việt Nam"
      },
      {
        "q_num": 11,
        "orig_id": 139,
        "title_raw": "Câu 11.[!b:$ Yếu tố nào không thuộc phạm trù chủ quan:$]",
        "clean_text": "Yếu tố nào không thuộc phạm trù chủ quan:",
        "options_raw": [
          "A. Tri thức",
          "B. Ý chí",
          "C. Động cơ",
          "*D. Điều kiện hoạt động của chủ thể"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tri thức"
          },
          {
            "letter": "B",
            "text": "Ý chí"
          },
          {
            "letter": "C",
            "text": "Động cơ"
          },
          {
            "letter": "D",
            "text": "Điều kiện hoạt động của chủ thể"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Điều kiện hoạt động của chủ thể"
      },
      {
        "q_num": 12,
        "orig_id": 122,
        "title_raw": "Câu 12.[!b:$ Quy luật chuyển hoá từ nhưng sự thay đổi về lượng dẫn tới sự thay đổi về chất và ngược lại làm rõ vấn đề gì?$]",
        "clean_text": "Quy luật chuyển hoá từ nhưng sự thay đổi về lượng dẫn tới sự thay đổi về chất và ngược lại làm rõ vấn đề gì?",
        "options_raw": [
          "A. Nguồn gốc của sự phát triển",
          "B. Động lực của sự phát triển",
          "*C. Cách thức của sự phát triển",
          "D. Khuynh hướng của sự phát triển"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguồn gốc của sự phát triển"
          },
          {
            "letter": "B",
            "text": "Động lực của sự phát triển"
          },
          {
            "letter": "C",
            "text": "Cách thức của sự phát triển"
          },
          {
            "letter": "D",
            "text": "Khuynh hướng của sự phát triển"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Cách thức của sự phát triển"
      },
      {
        "q_num": 13,
        "orig_id": 105,
        "title_raw": "Câu 13.[!b:$ Cơ sở hạ tầng của xã hội là:$]",
        "clean_text": "Cơ sở hạ tầng của xã hội là:",
        "options_raw": [
          "A. Đường xá, bến cảng, bưu điện…",
          "*B. Tổng hợp các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
          "C. Toàn bộ cơ sở vật chất - kỹ thuật của xã hội",
          "D. Đời sống vật chất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đường xá, bến cảng, bưu điện…"
          },
          {
            "letter": "B",
            "text": "Tổng hợp các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội"
          },
          {
            "letter": "C",
            "text": "Toàn bộ cơ sở vật chất - kỹ thuật của xã hội"
          },
          {
            "letter": "D",
            "text": "Đời sống vật chất"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tổng hợp các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội"
      },
      {
        "q_num": 14,
        "orig_id": 57,
        "title_raw": "Câu 14.[!b:$ Xác định quan niệm sai về mâu thuẫn và vai trò của mâu thuẫn:$]",
        "clean_text": "Xác định quan niệm sai về mâu thuẫn và vai trò của mâu thuẫn:",
        "options_raw": [
          "A. Mâu thuẫn có tính khách quan, phổ biến trong tự nhiên, xã hội và tư duy",
          "B. Quy luật mâu thuẫn là hạt nhân của phép biện chứng duy vật, chỉ rõ nguồn gốc, động lực của sự phát triển",
          "*C. Sự liên hệ, tác động lẫn nhau của các mặt đối lập trong sự vật, hiện tượng là mâu thuẫn",
          "D. Giải quyết xong mâu thuẫn là kết thúc cái cũ, làm nảy sinh cái mới"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mâu thuẫn có tính khách quan, phổ biến trong tự nhiên, xã hội và tư duy"
          },
          {
            "letter": "B",
            "text": "Quy luật mâu thuẫn là hạt nhân của phép biện chứng duy vật, chỉ rõ nguồn gốc, động lực của sự phát triển"
          },
          {
            "letter": "C",
            "text": "Sự liên hệ, tác động lẫn nhau của các mặt đối lập trong sự vật, hiện tượng là mâu thuẫn"
          },
          {
            "letter": "D",
            "text": "Giải quyết xong mâu thuẫn là kết thúc cái cũ, làm nảy sinh cái mới"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Sự liên hệ, tác động lẫn nhau của các mặt đối lập trong sự vật, hiện tượng là mâu thuẫn"
      },
      {
        "q_num": 15,
        "orig_id": 146,
        "title_raw": "Câu 15.[!b:$ Tiêu chuẩn cơ bản nhất của tiến bộ xã hội là:$]",
        "clean_text": "Tiêu chuẩn cơ bản nhất của tiến bộ xã hội là:",
        "options_raw": [
          "A. Trình độ phát triển của đạo đức, luật pháp, tôn giáo",
          "B. Trình độ dân trí và mức sống cao của xã hội",
          "C. Trình độ phát triển của khoa học kỹ thuật",
          "*D. Trình độ phát triển của lực lượng sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Trình độ phát triển của đạo đức, luật pháp, tôn giáo"
          },
          {
            "letter": "B",
            "text": "Trình độ dân trí và mức sống cao của xã hội"
          },
          {
            "letter": "C",
            "text": "Trình độ phát triển của khoa học kỹ thuật"
          },
          {
            "letter": "D",
            "text": "Trình độ phát triển của lực lượng sản xuất"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Trình độ phát triển của lực lượng sản xuất"
      },
      {
        "q_num": 16,
        "orig_id": 91,
        "title_raw": "Câu 16.[!b:$ Nguyên nhân trực tiếp ra đời giai cấp trong xã hội:$]",
        "clean_text": "Nguyên nhân trực tiếp ra đời giai cấp trong xã hội:",
        "options_raw": [
          "A. Do sự phát triển lực lượng sản xuất làm xuất hiện “của dư” tương đối",
          "B. Do sự chênh lệch về khả năng giữa các tập đoàn người.",
          "C. Do sự phân hoá giữa giàu và nghèo trong xã hội.",
          "*D. Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Do sự phát triển lực lượng sản xuất làm xuất hiện “của dư” tương đối"
          },
          {
            "letter": "B",
            "text": "Do sự chênh lệch về khả năng giữa các tập đoàn người."
          },
          {
            "letter": "C",
            "text": "Do sự phân hoá giữa giàu và nghèo trong xã hội."
          },
          {
            "letter": "D",
            "text": "Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất"
      },
      {
        "q_num": 17,
        "orig_id": 41,
        "title_raw": "Câu 17.[!b:$ Chủ trương thực hiện nhất quán đa hình thức sở hữu ở nước ta hiện nay là:$]",
        "clean_text": "Chủ trương thực hiện nhất quán đa hình thức sở hữu ở nước ta hiện nay là:",
        "options_raw": [
          "A. Sự vận dụng đúng đắn quy luật về mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng",
          "B. Nhằm phát triển quan hệ sản xuất.",
          "C. Nhằm xây dựng kiến trúc thượng tầng xã hội",
          "*D. Sự vận dụng đúng đắn quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất, đáp ứng hội nhập kinh tế quốc tế"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự vận dụng đúng đắn quy luật về mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng"
          },
          {
            "letter": "B",
            "text": "Nhằm phát triển quan hệ sản xuất."
          },
          {
            "letter": "C",
            "text": "Nhằm xây dựng kiến trúc thượng tầng xã hội"
          },
          {
            "letter": "D",
            "text": "Sự vận dụng đúng đắn quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất, đáp ứng hội nhập kinh tế quốc tế"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Sự vận dụng đúng đắn quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất, đáp ứng hội nhập kinh tế quốc tế"
      },
      {
        "q_num": 18,
        "orig_id": 98,
        "title_raw": "Câu 18.[!b:$ Đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là gì?$]",
        "clean_text": "Đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là gì?",
        "options_raw": [
          "*A. Từ một nền sản xuất nhỏ quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản",
          "B. Nhiều thành phần xã hội đan xen tồn tại",
          "C. Năng suất lao động thấp",
          "D. Lực lượng sản xuất chưa phát triển"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Từ một nền sản xuất nhỏ quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản"
          },
          {
            "letter": "B",
            "text": "Nhiều thành phần xã hội đan xen tồn tại"
          },
          {
            "letter": "C",
            "text": "Năng suất lao động thấp"
          },
          {
            "letter": "D",
            "text": "Lực lượng sản xuất chưa phát triển"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Từ một nền sản xuất nhỏ quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản"
      },
      {
        "q_num": 19,
        "orig_id": 152,
        "title_raw": "Câu 19.[!b:$ Tiếp thu, phát triển thành tựu nghệ thuật hậu cần - kỹ thuật quân sự rút ra từ tính độc lập tương đối nào của ý thức xã hội:$]",
        "clean_text": "Tiếp thu, phát triển thành tựu nghệ thuật hậu cần - kỹ thuật quân sự rút ra từ tính độc lập tương đối nào của ý thức xã hội:",
        "options_raw": [
          "A. Từ tính tác động lẫn nhau của ý thức xã hội",
          "*B. Từ tính kế thừa của ý thức xã hội",
          "C. Từ tính lạc hậu của ý thức xã hội",
          "D. Từ tính vượt trước của ý thức xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Từ tính tác động lẫn nhau của ý thức xã hội"
          },
          {
            "letter": "B",
            "text": "Từ tính kế thừa của ý thức xã hội"
          },
          {
            "letter": "C",
            "text": "Từ tính lạc hậu của ý thức xã hội"
          },
          {
            "letter": "D",
            "text": "Từ tính vượt trước của ý thức xã hội"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Từ tính kế thừa của ý thức xã hội"
      },
      {
        "q_num": 20,
        "orig_id": 111,
        "title_raw": "Câu 20.[!b:$ Trình độ của lực lượng sản xuất thể hiện ở điểm nào sau đây:$]",
        "clean_text": "Trình độ của lực lượng sản xuất thể hiện ở điểm nào sau đây:",
        "options_raw": [
          "A. Trình độ công cụ lao động và con người lao động",
          "*B. Tất cả các phương án trên",
          "C. Trình độ tổ chức và phân công lao động xã hội",
          "D. Trình độ ứng dụng khoa học vào sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Trình độ công cụ lao động và con người lao động"
          },
          {
            "letter": "B",
            "text": "Tất cả các phương án trên"
          },
          {
            "letter": "C",
            "text": "Trình độ tổ chức và phân công lao động xã hội"
          },
          {
            "letter": "D",
            "text": "Trình độ ứng dụng khoa học vào sản xuất"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tất cả các phương án trên"
      },
      {
        "q_num": 21,
        "orig_id": 100,
        "title_raw": "Câu 21.[!b:$ Sự phát triển được biểu hiện ra trong xã hội là:$]",
        "clean_text": "Sự phát triển được biểu hiện ra trong xã hội là:",
        "options_raw": [
          "A. Sự xuất hiện các giống loài động vật, thực vật mới thích ứng tốt hơn với môi trường",
          "B. Sự thay thế xã hội này bằng xã hội khác có nền kinh tế phát triển hơn",
          "*C. Sự thay thế chế độ xã hội này bằng chế độ xã hội khác dân chủ, văn minh hơn",
          "D. Sự xuất hiện các hợp chất mới"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự xuất hiện các giống loài động vật, thực vật mới thích ứng tốt hơn với môi trường"
          },
          {
            "letter": "B",
            "text": "Sự thay thế xã hội này bằng xã hội khác có nền kinh tế phát triển hơn"
          },
          {
            "letter": "C",
            "text": "Sự thay thế chế độ xã hội này bằng chế độ xã hội khác dân chủ, văn minh hơn"
          },
          {
            "letter": "D",
            "text": "Sự xuất hiện các hợp chất mới"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Sự thay thế chế độ xã hội này bằng chế độ xã hội khác dân chủ, văn minh hơn"
      },
      {
        "q_num": 22,
        "orig_id": 64,
        "title_raw": "Câu 22.[!b:$ Yêu cầu của quan điểm phát triển là:$]",
        "clean_text": "Yêu cầu của quan điểm phát triển là:",
        "options_raw": [
          "A. Xem xét sự vật, hiện tượng trong quá trình vận động, phát triển không ngừng",
          "B. Dự báo được khuynh hướng vận động, phát triển của sự vật",
          "C. Phát triển là quá trình quanh co, phức tạp",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Xem xét sự vật, hiện tượng trong quá trình vận động, phát triển không ngừng"
          },
          {
            "letter": "B",
            "text": "Dự báo được khuynh hướng vận động, phát triển của sự vật"
          },
          {
            "letter": "C",
            "text": "Phát triển là quá trình quanh co, phức tạp"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 23,
        "orig_id": 66,
        "title_raw": "Câu 23.[!b:$ Cách nhìn nhận phiến diện, một chiều vi phạm nguyên tắc nào?$]",
        "clean_text": "Cách nhìn nhận phiến diện, một chiều vi phạm nguyên tắc nào?",
        "options_raw": [
          "A. Nguyên tắc khách quan",
          "*B. Nguyên tắc toàn diện",
          "C. Tất cả các phương án",
          "D. Nguyên tắc phát triển"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguyên tắc khách quan"
          },
          {
            "letter": "B",
            "text": "Nguyên tắc toàn diện"
          },
          {
            "letter": "C",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "D",
            "text": "Nguyên tắc phát triển"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Nguyên tắc toàn diện"
      },
      {
        "q_num": 24,
        "orig_id": 60,
        "title_raw": "Câu 24.[!b:$ Chọn phương án trả lời chính xác nhất:$]",
        "clean_text": "Chọn phương án trả lời chính xác nhất:",
        "options_raw": [
          "A. Phương thức thực hiện các quy luật mâu thuẫn là hai mặt đối lập cân bằng nhau",
          "B. Phương thức thực hiện các quy luật mâu thuẫn là mặt đối lập này đồng hoá mặt đối lập kia",
          "*C. Phương thức thực hiện các quy luật mâu thuẫn là tích luỹ về lượng để thay đổi về chất toàn bộ sự vật",
          "D. Phương thức thực hiện các quy luật mâu thuẫn là thay đổi vị trí, vai trò của hai mặt đối lập"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phương thức thực hiện các quy luật mâu thuẫn là hai mặt đối lập cân bằng nhau"
          },
          {
            "letter": "B",
            "text": "Phương thức thực hiện các quy luật mâu thuẫn là mặt đối lập này đồng hoá mặt đối lập kia"
          },
          {
            "letter": "C",
            "text": "Phương thức thực hiện các quy luật mâu thuẫn là tích luỹ về lượng để thay đổi về chất toàn bộ sự vật"
          },
          {
            "letter": "D",
            "text": "Phương thức thực hiện các quy luật mâu thuẫn là thay đổi vị trí, vai trò của hai mặt đối lập"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Phương thức thực hiện các quy luật mâu thuẫn là tích luỹ về lượng để thay đổi về chất toàn bộ sự vật"
      },
      {
        "q_num": 25,
        "orig_id": 89,
        "title_raw": "Câu 25.[!b:$ Yếu tố cơ bản để giai cấp thống trị về kinh tế trở thành giai cấp thống trị về chính trị:$]",
        "clean_text": "Yếu tố cơ bản để giai cấp thống trị về kinh tế trở thành giai cấp thống trị về chính trị:",
        "options_raw": [
          "A. Hệ tư tưởng",
          "*B. Nhà nước",
          "C. Hệ thống luật pháp",
          "D. Vị thế chính trị"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hệ tư tưởng"
          },
          {
            "letter": "B",
            "text": "Nhà nước"
          },
          {
            "letter": "C",
            "text": "Hệ thống luật pháp"
          },
          {
            "letter": "D",
            "text": "Vị thế chính trị"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Nhà nước"
      },
      {
        "q_num": 26,
        "orig_id": 131,
        "title_raw": "Câu 26.[!b:$ Lựa chọn câu đúng theo quan điểm chủ nghĩa duy vật biện chứng:$]",
        "clean_text": "Lựa chọn câu đúng theo quan điểm chủ nghĩa duy vật biện chứng:",
        "options_raw": [
          "A. Phát triển của sự vật, hiện tượng là do con người điều khiển",
          "B. Phát triển là sự thay đổi thuần tuý về lượng của sự sự vật, hiện tượng",
          "C. Phát triển là sự thay đổi vị trí của sự vật, hiện tượng trong không gian, thời gian",
          "*D. Phát triển không chỉ là sự thay đổi về lượng mà còn thay đổi về chất của sự vật, hiện tượng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phát triển của sự vật, hiện tượng là do con người điều khiển"
          },
          {
            "letter": "B",
            "text": "Phát triển là sự thay đổi thuần tuý về lượng của sự sự vật, hiện tượng"
          },
          {
            "letter": "C",
            "text": "Phát triển là sự thay đổi vị trí của sự vật, hiện tượng trong không gian, thời gian"
          },
          {
            "letter": "D",
            "text": "Phát triển không chỉ là sự thay đổi về lượng mà còn thay đổi về chất của sự vật, hiện tượng"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Phát triển không chỉ là sự thay đổi về lượng mà còn thay đổi về chất của sự vật, hiện tượng"
      },
      {
        "q_num": 27,
        "orig_id": 99,
        "title_raw": "Câu 27.[!b:$ Trong các hình thức đấu tranh giai cấp của thời kỳ quá độ lên chủ nghĩa xã hội, hình thức nào là cơ bản nhất:$]",
        "clean_text": "Trong các hình thức đấu tranh giai cấp của thời kỳ quá độ lên chủ nghĩa xã hội, hình thức nào là cơ bản nhất:",
        "options_raw": [
          "*A. Kinh tế",
          "B. Văn hoá tư tưởng",
          "C. Chính trị",
          "D. Quân sự"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Kinh tế"
          },
          {
            "letter": "B",
            "text": "Văn hoá tư tưởng"
          },
          {
            "letter": "C",
            "text": "Chính trị"
          },
          {
            "letter": "D",
            "text": "Quân sự"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Kinh tế"
      },
      {
        "q_num": 28,
        "orig_id": 47,
        "title_raw": "Câu 28.[!b:$ Luận điểm: “Thực tiễn không có lý luận hướng dẫn thì thành thực tiễn mù quáng. Lý luận mà không liên hệ với thực tiễn là lý luận suông” của tác giả nào?$]",
        "clean_text": "Luận điểm: “Thực tiễn không có lý luận hướng dẫn thì thành thực tiễn mù quáng. Lý luận mà không liên hệ với thực tiễn là lý luận suông” của tác giả nào?",
        "options_raw": [
          "A. C.Mác",
          "B. Ph. Ăngghen",
          "*C. Hồ Chí Minh",
          "D. V.I.Lênin"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "C.Mác"
          },
          {
            "letter": "B",
            "text": "Ph. Ăngghen"
          },
          {
            "letter": "C",
            "text": "Hồ Chí Minh"
          },
          {
            "letter": "D",
            "text": "V.I.Lênin"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Hồ Chí Minh"
      },
      {
        "q_num": 29,
        "orig_id": 63,
        "title_raw": "Câu 29.[!b:$ Tư tưởng dao động, ỷ lại, trông chờ vi phạm nguyên tắc nào?$]",
        "clean_text": "Tư tưởng dao động, ỷ lại, trông chờ vi phạm nguyên tắc nào?",
        "options_raw": [
          "A. Nguyên tắc khách quan",
          "B. Tất cả các phương án",
          "*C. Nguyên tắc phát triển",
          "D. Nguyên tắc toàn diện"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguyên tắc khách quan"
          },
          {
            "letter": "B",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "C",
            "text": "Nguyên tắc phát triển"
          },
          {
            "letter": "D",
            "text": "Nguyên tắc toàn diện"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Nguyên tắc phát triển"
      },
      {
        "q_num": 30,
        "orig_id": 192,
        "title_raw": "Câu 30.[!b:$ Lựa chọn câu đúng theo quan điểm của chủ nghĩa duy vật biện chứng:$]",
        "clean_text": "Lựa chọn câu đúng theo quan điểm của chủ nghĩa duy vật biện chứng:",
        "options_raw": [
          "*A. Mối liên hệ của sự vật, hiện tượng không chỉ diễn ra giữa các sự vật, hiện tượng mà còn diễn ra ngay trong sự sự vật, hiện tượng",
          "B. Mối liên giữa các sự vật, hiện tượng là có thật, còn mối liên hệ trong tư duy con người chỉ là do con người tưởng tượng ra",
          "C. Mối liên hệ chỉ diễn ra giữa các sự sự vật, hiện tượng với nhau còn trong bản thân sự sự vật, hiện tượng không có sự liên hệ.",
          "D. Mối liên hệ của sự sự vật, hiện tượng chỉ do ý chí con người tạo ra còn bản thân sự sự vật, hiện tượng không có sự liên hệ."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mối liên hệ của sự vật, hiện tượng không chỉ diễn ra giữa các sự vật, hiện tượng mà còn diễn ra ngay trong sự sự vật, hiện tượng"
          },
          {
            "letter": "B",
            "text": "Mối liên giữa các sự vật, hiện tượng là có thật, còn mối liên hệ trong tư duy con người chỉ là do con người tưởng tượng ra"
          },
          {
            "letter": "C",
            "text": "Mối liên hệ chỉ diễn ra giữa các sự sự vật, hiện tượng với nhau còn trong bản thân sự sự vật, hiện tượng không có sự liên hệ."
          },
          {
            "letter": "D",
            "text": "Mối liên hệ của sự sự vật, hiện tượng chỉ do ý chí con người tạo ra còn bản thân sự sự vật, hiện tượng không có sự liên hệ."
          }
        ],
        "correct_letter": "A",
        "correct_text": "Mối liên hệ của sự vật, hiện tượng không chỉ diễn ra giữa các sự vật, hiện tượng mà còn diễn ra ngay trong sự sự vật, hiện tượng"
      }
    ]
  },
  {
    "test_num": 4,
    "title": "Đề trắc nghiệm số 4",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 117,
        "title_raw": "Câu 1.[!b:$ Xác định quan niệm sai về phủ định của phủ định:$]",
        "clean_text": "Xác định quan niệm sai về phủ định của phủ định:",
        "options_raw": [
          "A. Phủ định của phủ định trong tư duy con người là sự phản ánh phủ định của phủ định trong hiện thực",
          "*B. Phủ định của phủ định là sự lặp lại cái cũ theo đường tròn khép kín",
          "C. Phủ định của phủ định là phổ biến trong tự nhiên, xã hội, tư duy",
          "D. Phủ định của phủ định có hình “xoáy ốc” theo hướng tiến lên đến vô tận"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phủ định của phủ định trong tư duy con người là sự phản ánh phủ định của phủ định trong hiện thực"
          },
          {
            "letter": "B",
            "text": "Phủ định của phủ định là sự lặp lại cái cũ theo đường tròn khép kín"
          },
          {
            "letter": "C",
            "text": "Phủ định của phủ định là phổ biến trong tự nhiên, xã hội, tư duy"
          },
          {
            "letter": "D",
            "text": "Phủ định của phủ định có hình “xoáy ốc” theo hướng tiến lên đến vô tận"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Phủ định của phủ định là sự lặp lại cái cũ theo đường tròn khép kín"
      },
      {
        "q_num": 2,
        "orig_id": 77,
        "title_raw": "Câu 2.[!b:$ Bệnh chủ quan vi phạm nguyên tắc nào?$]",
        "clean_text": "Bệnh chủ quan vi phạm nguyên tắc nào?",
        "options_raw": [
          "*A. Nguyên tắc khách quan",
          "B. Nguyên tắc lịch sử - cụ thể",
          "C. Tất cả các phương án.",
          "D. Nguyên tắc toàn diện."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguyên tắc khách quan"
          },
          {
            "letter": "B",
            "text": "Nguyên tắc lịch sử - cụ thể"
          },
          {
            "letter": "C",
            "text": "Tất cả các phương án."
          },
          {
            "letter": "D",
            "text": "Nguyên tắc toàn diện."
          }
        ],
        "correct_letter": "A",
        "correct_text": "Nguyên tắc khách quan"
      },
      {
        "q_num": 3,
        "orig_id": 84,
        "title_raw": "Câu 3.[!b:$ Tính chất nào sau đây biểu hiện tính độc lập tương đối của ý thức xã hội:$]",
        "clean_text": "Tính chất nào sau đây biểu hiện tính độc lập tương đối của ý thức xã hội:",
        "options_raw": [
          "*A. Tất cả các phương án",
          "B. Tính vượt trước",
          "C. Tính lạc hậu",
          "D. Tính kế thừa"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Tính vượt trước"
          },
          {
            "letter": "C",
            "text": "Tính lạc hậu"
          },
          {
            "letter": "D",
            "text": "Tính kế thừa"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 4,
        "orig_id": 165,
        "title_raw": "Câu 4.[!b:$ Cách hiểu nào sau đây về mục đích cuối cùng của đấu tranh giai cấp trong lịch sử là đúng?$]",
        "clean_text": "Cách hiểu nào sau đây về mục đích cuối cùng của đấu tranh giai cấp trong lịch sử là đúng?",
        "options_raw": [
          "A. Đấu tranh giai cấp nhằm thay đổi hiện thực xã hội",
          "B. Đấu tranh giai cấp xét đến cùng là nhằm chiếm lấy quyền lực nhà nước",
          "C. Đấu tranh giai cấp nhằm thay đổi địa vị lẫn nhau giữa các giai cấp",
          "*D. Đấu tranh giai cấp nhằm mục đích cuối cùng là xoá bỏ giai cấp."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đấu tranh giai cấp nhằm thay đổi hiện thực xã hội"
          },
          {
            "letter": "B",
            "text": "Đấu tranh giai cấp xét đến cùng là nhằm chiếm lấy quyền lực nhà nước"
          },
          {
            "letter": "C",
            "text": "Đấu tranh giai cấp nhằm thay đổi địa vị lẫn nhau giữa các giai cấp"
          },
          {
            "letter": "D",
            "text": "Đấu tranh giai cấp nhằm mục đích cuối cùng là xoá bỏ giai cấp."
          }
        ],
        "correct_letter": "D",
        "correct_text": "Đấu tranh giai cấp nhằm mục đích cuối cùng là xoá bỏ giai cấp."
      },
      {
        "q_num": 5,
        "orig_id": 5,
        "title_raw": "Câu 5.[!b:$ Lựa chọn phương án đúng về vai trò của tồn tại xã hội đối với ý thức xã hội:$]",
        "clean_text": "Lựa chọn phương án đúng về vai trò của tồn tại xã hội đối với ý thức xã hội:",
        "options_raw": [
          "A. Tồn tại xã hội phụ thuộc vào ý thức xã hội",
          "B. ý thức xã hội hoàn toàn phụ thuộc một cách thụ động vào tồn tại xã hội.",
          "C. Tồn tại xã hội có vai trò quyết định đối với các hình thái ý thức xã hội một cách đơn giản trực tiếp không qua các khâu trung gian.",
          "*D. Ý thức xã hội là sự phản ánh tồn tại xã hội, phụ thuộc vào tồn tại xã hội."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tồn tại xã hội phụ thuộc vào ý thức xã hội"
          },
          {
            "letter": "B",
            "text": "ý thức xã hội hoàn toàn phụ thuộc một cách thụ động vào tồn tại xã hội."
          },
          {
            "letter": "C",
            "text": "Tồn tại xã hội có vai trò quyết định đối với các hình thái ý thức xã hội một cách đơn giản trực tiếp không qua các khâu trung gian."
          },
          {
            "letter": "D",
            "text": "Ý thức xã hội là sự phản ánh tồn tại xã hội, phụ thuộc vào tồn tại xã hội."
          }
        ],
        "correct_letter": "D",
        "correct_text": "Ý thức xã hội là sự phản ánh tồn tại xã hội, phụ thuộc vào tồn tại xã hội."
      },
      {
        "q_num": 6,
        "orig_id": 2,
        "title_raw": "Câu 6.[!b:$ Tính đa dạng trong sự phát triển của lịch sử thể hiện ở chỗ?$]",
        "clean_text": "Tính đa dạng trong sự phát triển của lịch sử thể hiện ở chỗ?",
        "options_raw": [
          "A. Sự phát triển của lịch sử tuân theo quy luật khách quan",
          "B. Không có sự bỏ qua hình thái kinh tế - xã hội của các quốc gia",
          "*C. Một số quốc gia có thể bỏ qua một vài hình thái kinh tế - xã hội để tiến tới hình thái kinh tế -  xã hội cao hơn.",
          "D. Quá trình phát triển của các quốc gia là giống nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự phát triển của lịch sử tuân theo quy luật khách quan"
          },
          {
            "letter": "B",
            "text": "Không có sự bỏ qua hình thái kinh tế - xã hội của các quốc gia"
          },
          {
            "letter": "C",
            "text": "Một số quốc gia có thể bỏ qua một vài hình thái kinh tế - xã hội để tiến tới hình thái kinh tế -  xã hội cao hơn."
          },
          {
            "letter": "D",
            "text": "Quá trình phát triển của các quốc gia là giống nhau"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Một số quốc gia có thể bỏ qua một vài hình thái kinh tế - xã hội để tiến tới hình thái kinh tế -  xã hội cao hơn."
      },
      {
        "q_num": 7,
        "orig_id": 35,
        "title_raw": "Câu 7.[!b:$ Tiêu chuẩn khách quan để phân biệt các hình thái kinh tế - xã hội:$]",
        "clean_text": "Tiêu chuẩn khách quan để phân biệt các hình thái kinh tế - xã hội:",
        "options_raw": [
          "A. Lực lượng sản xuất",
          "B. Bộ máy nhà nước",
          "*C. Quan hệ sản xuất",
          "D. Chính trị, tư tưởng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lực lượng sản xuất"
          },
          {
            "letter": "B",
            "text": "Bộ máy nhà nước"
          },
          {
            "letter": "C",
            "text": "Quan hệ sản xuất"
          },
          {
            "letter": "D",
            "text": "Chính trị, tư tưởng"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Quan hệ sản xuất"
      },
      {
        "q_num": 8,
        "orig_id": 38,
        "title_raw": "Câu 8.[!b:$ Cơ sở lý luận nền tảng của đường lối xây dựng chủ nghĩa xã hội của Đảng ta là:$]",
        "clean_text": "Cơ sở lý luận nền tảng của đường lối xây dựng chủ nghĩa xã hội của Đảng ta là:",
        "options_raw": [
          "A. Học thuyết về giai cấp và đấu tranh giai cấp của triết học Mác-Lênin",
          "*B. Học thuyết về hình thái kinh tế - xã hội",
          "C. Học thuyết về con người",
          "D. Phép biện chứng duy vật"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Học thuyết về giai cấp và đấu tranh giai cấp của triết học Mác-Lênin"
          },
          {
            "letter": "B",
            "text": "Học thuyết về hình thái kinh tế - xã hội"
          },
          {
            "letter": "C",
            "text": "Học thuyết về con người"
          },
          {
            "letter": "D",
            "text": "Phép biện chứng duy vật"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Học thuyết về hình thái kinh tế - xã hội"
      },
      {
        "q_num": 9,
        "orig_id": 178,
        "title_raw": "Câu 9.[!b:$ Chọn phương án trả lời chính xác nhất: Tri thức của con người ngày càng hoàn thiện là vì:$]",
        "clean_text": "Chọn phương án trả lời chính xác nhất: Tri thức của con người ngày càng hoàn thiện là vì:",
        "options_raw": [
          "A. Nhờ hệ thống tri thức trước đó làm tiền đề",
          "B. Nhờ sự nỗ lực hoạt động thực tiễn của con người",
          "*C. Do khả năng tổng hợp của trí tuệ con người trong thời đại mới",
          "D. Thế giới đang vận động, bộc lộ càng nhiều tính quy định"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nhờ hệ thống tri thức trước đó làm tiền đề"
          },
          {
            "letter": "B",
            "text": "Nhờ sự nỗ lực hoạt động thực tiễn của con người"
          },
          {
            "letter": "C",
            "text": "Do khả năng tổng hợp của trí tuệ con người trong thời đại mới"
          },
          {
            "letter": "D",
            "text": "Thế giới đang vận động, bộc lộ càng nhiều tính quy định"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Do khả năng tổng hợp của trí tuệ con người trong thời đại mới"
      },
      {
        "q_num": 10,
        "orig_id": 56,
        "title_raw": "Câu 10.[!b:$ Những yếu tố cấu thành lực lượng sản xuất:$]",
        "clean_text": "Những yếu tố cấu thành lực lượng sản xuất:",
        "options_raw": [
          "A. Tư liệu lao động và đối tượng lao động",
          "B. Người lao động và công cụ lao động",
          "C. Máy móc và khoa học công nghệ",
          "*D. Người lao động và tư liệu sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tư liệu lao động và đối tượng lao động"
          },
          {
            "letter": "B",
            "text": "Người lao động và công cụ lao động"
          },
          {
            "letter": "C",
            "text": "Máy móc và khoa học công nghệ"
          },
          {
            "letter": "D",
            "text": "Người lao động và tư liệu sản xuất"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Người lao động và tư liệu sản xuất"
      },
      {
        "q_num": 11,
        "orig_id": 145,
        "title_raw": "Câu 11.[!b:$ Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau sai:$]",
        "clean_text": "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau sai:",
        "options_raw": [
          "A. Các mặt đối lập nằm trong sự liên hệ với nhau, không có mặt đối lập nào tồn tại biệt lập.",
          "B. Các mặt đối lập đấu tranh làm sự vật vận động, biến đổi",
          "C. Các mặt đối lập liên hệ, tác động qua lại với nhau một cách khách quan.",
          "*D. Không phải lúc nào các mặt đối lập cũng liên hệ với nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Các mặt đối lập nằm trong sự liên hệ với nhau, không có mặt đối lập nào tồn tại biệt lập."
          },
          {
            "letter": "B",
            "text": "Các mặt đối lập đấu tranh làm sự vật vận động, biến đổi"
          },
          {
            "letter": "C",
            "text": "Các mặt đối lập liên hệ, tác động qua lại với nhau một cách khách quan."
          },
          {
            "letter": "D",
            "text": "Không phải lúc nào các mặt đối lập cũng liên hệ với nhau"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Không phải lúc nào các mặt đối lập cũng liên hệ với nhau"
      },
      {
        "q_num": 12,
        "orig_id": 125,
        "title_raw": "Câu 12.[!b:$ Theo quan điểm triết học Mác - Lênin, cơ sở lý luận của quan điểm toàn diện là:$]",
        "clean_text": "Theo quan điểm triết học Mác - Lênin, cơ sở lý luận của quan điểm toàn diện là:",
        "options_raw": [
          "*A. Nguyên lý về mối liên hệ phổ biến",
          "B. Nguyên lý về sự phát triển",
          "C. Quy luật thống nhất và đấu tranh của các mặt đối lập",
          "D. Nguyên tắc thống nhất giữa lý luận với thực tiễn"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguyên lý về mối liên hệ phổ biến"
          },
          {
            "letter": "B",
            "text": "Nguyên lý về sự phát triển"
          },
          {
            "letter": "C",
            "text": "Quy luật thống nhất và đấu tranh của các mặt đối lập"
          },
          {
            "letter": "D",
            "text": "Nguyên tắc thống nhất giữa lý luận với thực tiễn"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Nguyên lý về mối liên hệ phổ biến"
      },
      {
        "q_num": 13,
        "orig_id": 157,
        "title_raw": "Câu 13.[!b:$ Quy luật mâu thuẫn có vị trí như thế nào trong phép biện chứng duy vật:$]",
        "clean_text": "Quy luật mâu thuẫn có vị trí như thế nào trong phép biện chứng duy vật:",
        "options_raw": [
          "A. Vạch ra cách thức của sự phát triển.",
          "*B. Là hạt nhân của phép biện chứng duy vật, vạch ra nguồn gốc, động lực bên trong của sự vận động và phát triển.",
          "C. vạch ra khuynh hướng, cách thức của sự phát triển",
          "D. Vạch ra xu hướng của sự phát triển."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Vạch ra cách thức của sự phát triển."
          },
          {
            "letter": "B",
            "text": "Là hạt nhân của phép biện chứng duy vật, vạch ra nguồn gốc, động lực bên trong của sự vận động và phát triển."
          },
          {
            "letter": "C",
            "text": "vạch ra khuynh hướng, cách thức của sự phát triển"
          },
          {
            "letter": "D",
            "text": "Vạch ra xu hướng của sự phát triển."
          }
        ],
        "correct_letter": "B",
        "correct_text": "Là hạt nhân của phép biện chứng duy vật, vạch ra nguồn gốc, động lực bên trong của sự vận động và phát triển."
      },
      {
        "q_num": 14,
        "orig_id": 170,
        "title_raw": "Câu 14.[!b:$ Điền từ thích hợp vào chỗ trống: “……. là nguyên tắc căn bản của chủ nghĩa Mác- Lênin:$]",
        "clean_text": "Điền từ thích hợp vào chỗ trống: “……. là nguyên tắc căn bản của chủ nghĩa Mác- Lênin:",
        "options_raw": [
          "A. Nguyên tắc phát triển",
          "B. Nguyên tắc khách quan",
          "C. Nguyên tắc toàn diện",
          "*D. Thống nhất giữa lý luận và thực tiễn"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguyên tắc phát triển"
          },
          {
            "letter": "B",
            "text": "Nguyên tắc khách quan"
          },
          {
            "letter": "C",
            "text": "Nguyên tắc toàn diện"
          },
          {
            "letter": "D",
            "text": "Thống nhất giữa lý luận và thực tiễn"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Thống nhất giữa lý luận và thực tiễn"
      },
      {
        "q_num": 15,
        "orig_id": 83,
        "title_raw": "Câu 15.[!b:$ Tính chất nào sau đây không biểu hiện tính độc lập tương đối của ý thức xã hội:$]",
        "clean_text": "Tính chất nào sau đây không biểu hiện tính độc lập tương đối của ý thức xã hội:",
        "options_raw": [
          "*A. Tính chiến đấu",
          "B. Tính lạc hậu",
          "C. Sự tác động lẫn nhau giữa các hình thái ý thức xã hội",
          "D. Tính vượt trước"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tính chiến đấu"
          },
          {
            "letter": "B",
            "text": "Tính lạc hậu"
          },
          {
            "letter": "C",
            "text": "Sự tác động lẫn nhau giữa các hình thái ý thức xã hội"
          },
          {
            "letter": "D",
            "text": "Tính vượt trước"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tính chiến đấu"
      },
      {
        "q_num": 16,
        "orig_id": 189,
        "title_raw": "Câu 16.[!b:$ Cơ sở khoa học để Đảng ta nhận thức những vấn đề mâu thuẫn trên thế giới và trong nước hiện nay:$]",
        "clean_text": "Cơ sở khoa học để Đảng ta nhận thức những vấn đề mâu thuẫn trên thế giới và trong nước hiện nay:",
        "options_raw": [
          "A. Tất cả các phương án",
          "B. Quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại",
          "*C. Quy luật thống nhất và đấu tranh của các mặt đối lập",
          "D. Quy luật phủ định của phủ định"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại"
          },
          {
            "letter": "C",
            "text": "Quy luật thống nhất và đấu tranh của các mặt đối lập"
          },
          {
            "letter": "D",
            "text": "Quy luật phủ định của phủ định"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Quy luật thống nhất và đấu tranh của các mặt đối lập"
      },
      {
        "q_num": 17,
        "orig_id": 71,
        "title_raw": "Câu 17.[!b:$ Xác định phương án đúng trong các nhận định sau:$]",
        "clean_text": "Xác định phương án đúng trong các nhận định sau:",
        "options_raw": [
          "A. Phát triển là xu hướng vận động làm nảy sinh cái mới",
          "*B. Phát triển là xu hướng vận động tiến lên từ thấp đến cao, từ đơn giản đến phức tạp, từ kém hoàn thiện đến hoàn thiện hơn của các sự sự vật, hiện tượng",
          "C. Phát triển là quá trình đi lên liên tục, xuất hiện cái mới liên tục mà không bao hàm sự thụt lùi tạm thời, thoáng qua",
          "D. Phát triển là xu hướng thống trị của thế giới tiến lên từ đơn giản đến phức tạp, từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện hơn theo những quy luật nhất định"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phát triển là xu hướng vận động làm nảy sinh cái mới"
          },
          {
            "letter": "B",
            "text": "Phát triển là xu hướng vận động tiến lên từ thấp đến cao, từ đơn giản đến phức tạp, từ kém hoàn thiện đến hoàn thiện hơn của các sự sự vật, hiện tượng"
          },
          {
            "letter": "C",
            "text": "Phát triển là quá trình đi lên liên tục, xuất hiện cái mới liên tục mà không bao hàm sự thụt lùi tạm thời, thoáng qua"
          },
          {
            "letter": "D",
            "text": "Phát triển là xu hướng thống trị của thế giới tiến lên từ đơn giản đến phức tạp, từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện hơn theo những quy luật nhất định"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Phát triển là xu hướng vận động tiến lên từ thấp đến cao, từ đơn giản đến phức tạp, từ kém hoàn thiện đến hoàn thiện hơn của các sự sự vật, hiện tượng"
      },
      {
        "q_num": 18,
        "orig_id": 40,
        "title_raw": "Câu 18.[!b:$ Luận điểm: “Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên” của C.Mác nói về:$]",
        "clean_text": "Luận điểm: “Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên” của C.Mác nói về:",
        "options_raw": [
          "A. Sự phát triển của xã hội có tính ngẫu nhiên",
          "*B. Sự phát triển của xã hội có tính quy luật",
          "C. Sự phát triển của xã hội không tuân theo quy luật nào",
          "D. Sự phát triển của xã hội phụ thuộc ý muốn của con người"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự phát triển của xã hội có tính ngẫu nhiên"
          },
          {
            "letter": "B",
            "text": "Sự phát triển của xã hội có tính quy luật"
          },
          {
            "letter": "C",
            "text": "Sự phát triển của xã hội không tuân theo quy luật nào"
          },
          {
            "letter": "D",
            "text": "Sự phát triển của xã hội phụ thuộc ý muốn của con người"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Sự phát triển của xã hội có tính quy luật"
      },
      {
        "q_num": 19,
        "orig_id": 86,
        "title_raw": "Câu 19.[!b:$ Hình thức đấu tranh đầu tiên của giai cấp vô sản chống giai cấp tư sản:$]",
        "clean_text": "Hình thức đấu tranh đầu tiên của giai cấp vô sản chống giai cấp tư sản:",
        "options_raw": [
          "A. Đấu tranh vũ trang",
          "*B. Đấu tranh kinh tế",
          "C. Đấu tranh chính trị",
          "D. Đấu tranh tư tưởng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đấu tranh vũ trang"
          },
          {
            "letter": "B",
            "text": "Đấu tranh kinh tế"
          },
          {
            "letter": "C",
            "text": "Đấu tranh chính trị"
          },
          {
            "letter": "D",
            "text": "Đấu tranh tư tưởng"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Đấu tranh kinh tế"
      },
      {
        "q_num": 20,
        "orig_id": 52,
        "title_raw": "Câu 20.[!b:$ Theo C.Mác và Ph.Ăngghen, quá trình thay thế các hình thức sở hữu tư liệu sản xuất phụ thuộc trực tiếp vào?$]",
        "clean_text": "Theo C.Mác và Ph.Ăngghen, quá trình thay thế các hình thức sở hữu tư liệu sản xuất phụ thuộc trực tiếp vào?",
        "options_raw": [
          "*A. Trình độ phân công lao động xã hội",
          "B. Trình độ của công cụ sản xuất",
          "C. Trình độ kỹ thuật sản xuất",
          "D. Trình độ phát triển của lực lượng sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Trình độ phân công lao động xã hội"
          },
          {
            "letter": "B",
            "text": "Trình độ của công cụ sản xuất"
          },
          {
            "letter": "C",
            "text": "Trình độ kỹ thuật sản xuất"
          },
          {
            "letter": "D",
            "text": "Trình độ phát triển của lực lượng sản xuất"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Trình độ phân công lao động xã hội"
      },
      {
        "q_num": 21,
        "orig_id": 72,
        "title_raw": "Câu 21.[!b:$ Điền từ vào chỗ trống để hoàn thiện định nghĩa: “Phát triển là một phạm trù triết học dùng để khái quát quá trình...... tiến lên từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện”:$]",
        "clean_text": "Điền từ vào chỗ trống để hoàn thiện định nghĩa: “Phát triển là một phạm trù triết học dùng để khái quát quá trình...... tiến lên từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện”:",
        "options_raw": [
          "A. Đi lên",
          "B. Biến đổi",
          "C. Phát triển",
          "*D. Vận động"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đi lên"
          },
          {
            "letter": "B",
            "text": "Biến đổi"
          },
          {
            "letter": "C",
            "text": "Phát triển"
          },
          {
            "letter": "D",
            "text": "Vận động"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Vận động"
      },
      {
        "q_num": 22,
        "orig_id": 33,
        "title_raw": "Câu 22.[!b:$ Trong sự nghiệp xây dựng chủ nghĩa xã hội ở nước ta, chúng ta phải:$]",
        "clean_text": "Trong sự nghiệp xây dựng chủ nghĩa xã hội ở nước ta, chúng ta phải:",
        "options_raw": [
          "A. Chủ động xây dựng quan hệ sản xuất trước, sau đó xây dựng lực lượng sản xuất phù hợp.",
          "B. Xây dựng cho phù hợp theo từng thời kỳ",
          "*C. Kết hợp đồng thời xây dựng lực lượng sản xuất với xác lập quan hệ sản xuất phù hợp.",
          "D. Chủ động xây dựng lực lượng sản xuất trước, sau đó xây dựng quan hệ sản xuất phù hợp."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chủ động xây dựng quan hệ sản xuất trước, sau đó xây dựng lực lượng sản xuất phù hợp."
          },
          {
            "letter": "B",
            "text": "Xây dựng cho phù hợp theo từng thời kỳ"
          },
          {
            "letter": "C",
            "text": "Kết hợp đồng thời xây dựng lực lượng sản xuất với xác lập quan hệ sản xuất phù hợp."
          },
          {
            "letter": "D",
            "text": "Chủ động xây dựng lực lượng sản xuất trước, sau đó xây dựng quan hệ sản xuất phù hợp."
          }
        ],
        "correct_letter": "C",
        "correct_text": "Kết hợp đồng thời xây dựng lực lượng sản xuất với xác lập quan hệ sản xuất phù hợp."
      },
      {
        "q_num": 23,
        "orig_id": 70,
        "title_raw": "Câu 23.[!b:$ Thuật ngữ “Biện chứng” ra đời vào thời gian nào?$]",
        "clean_text": "Thuật ngữ “Biện chứng” ra đời vào thời gian nào?",
        "options_raw": [
          "A. Thời trung đại",
          "*B. Thời cổ đại",
          "C. Thời cận đại",
          "D. Thời hiện đại"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thời trung đại"
          },
          {
            "letter": "B",
            "text": "Thời cổ đại"
          },
          {
            "letter": "C",
            "text": "Thời cận đại"
          },
          {
            "letter": "D",
            "text": "Thời hiện đại"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Thời cổ đại"
      },
      {
        "q_num": 24,
        "orig_id": 168,
        "title_raw": "Câu 24.[!b:$ Chọn phương án đúng về bệnh giáo điều:$]",
        "clean_text": "Chọn phương án đúng về bệnh giáo điều:",
        "options_raw": [
          "*A. Quá đề cao lý luận, hạ thấp vai trò của thực tiễn",
          "B. Quá đề cao thực tiễn, hạ thấp vai trò của lý luận",
          "C. Quá đề cao cá nhân, hạ thấp vai trò của tập thể",
          "D. Không phương án nào đúng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quá đề cao lý luận, hạ thấp vai trò của thực tiễn"
          },
          {
            "letter": "B",
            "text": "Quá đề cao thực tiễn, hạ thấp vai trò của lý luận"
          },
          {
            "letter": "C",
            "text": "Quá đề cao cá nhân, hạ thấp vai trò của tập thể"
          },
          {
            "letter": "D",
            "text": "Không phương án nào đúng"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Quá đề cao lý luận, hạ thấp vai trò của thực tiễn"
      },
      {
        "q_num": 25,
        "orig_id": 127,
        "title_raw": "Câu 25.[!b:$ Chọn phương án trả lời sai:$]",
        "clean_text": "Chọn phương án trả lời sai:",
        "options_raw": [
          "A. Phương pháp biện chứng nhận thức đối tượng trong sự liên hệ, chi phối lẫn nhau",
          "B. Phương pháp biện chứng nhận thức đối tượng trong sự tác động, ảnh hưởng lẫn nhau",
          "C. Phương pháp biện chứng nhận thức đối tượng trong sự vận động, khuynh hướng chung là phát triển",
          "*D. Phương pháp biện chứng coi nguyên nhân biến đổi nằm ngoài đối tượng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phương pháp biện chứng nhận thức đối tượng trong sự liên hệ, chi phối lẫn nhau"
          },
          {
            "letter": "B",
            "text": "Phương pháp biện chứng nhận thức đối tượng trong sự tác động, ảnh hưởng lẫn nhau"
          },
          {
            "letter": "C",
            "text": "Phương pháp biện chứng nhận thức đối tượng trong sự vận động, khuynh hướng chung là phát triển"
          },
          {
            "letter": "D",
            "text": "Phương pháp biện chứng coi nguyên nhân biến đổi nằm ngoài đối tượng"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Phương pháp biện chứng coi nguyên nhân biến đổi nằm ngoài đối tượng"
      },
      {
        "q_num": 26,
        "orig_id": 87,
        "title_raw": "Câu 26.[!b:$ Nội dung chủ yếu của đấu tranh giai cấp ở nước ta trong giai đoạn hiện nay:$]",
        "clean_text": "Nội dung chủ yếu của đấu tranh giai cấp ở nước ta trong giai đoạn hiện nay:",
        "options_raw": [
          "*A. Thực hiện thắng lợi sự nghiệp công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa.",
          "B. Xóa bỏ sự tồn tại giai cấp",
          "C. Dung hòa mâu thuẫn giai cấp",
          "D. Thực hiện bình đẳng xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thực hiện thắng lợi sự nghiệp công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa."
          },
          {
            "letter": "B",
            "text": "Xóa bỏ sự tồn tại giai cấp"
          },
          {
            "letter": "C",
            "text": "Dung hòa mâu thuẫn giai cấp"
          },
          {
            "letter": "D",
            "text": "Thực hiện bình đẳng xã hội"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Thực hiện thắng lợi sự nghiệp công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa."
      },
      {
        "q_num": 27,
        "orig_id": 59,
        "title_raw": "Câu 27.[!b:$ Theo triết học Mác - Lênin, luận điểm nào sau đây là sai:$]",
        "clean_text": "Theo triết học Mác - Lênin, luận điểm nào sau đây là sai:",
        "options_raw": [
          "A. Mặt đối lập tồn tại khách quan trong các sự vật",
          "B. Mặt đối lập là những mặt có đặc điểm trái ngược nhau",
          "C. Mặt đối lập là vốn có của các sự vật, hiện tượng",
          "*D. Mặt đối lập không nhất thiết phải gắn liền với sự vật"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mặt đối lập tồn tại khách quan trong các sự vật"
          },
          {
            "letter": "B",
            "text": "Mặt đối lập là những mặt có đặc điểm trái ngược nhau"
          },
          {
            "letter": "C",
            "text": "Mặt đối lập là vốn có của các sự vật, hiện tượng"
          },
          {
            "letter": "D",
            "text": "Mặt đối lập không nhất thiết phải gắn liền với sự vật"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Mặt đối lập không nhất thiết phải gắn liền với sự vật"
      },
      {
        "q_num": 28,
        "orig_id": 169,
        "title_raw": "Câu 28.[!b:$ Bệnh kinh nghiệm vi phạm nguyên lý nào:$]",
        "clean_text": "Bệnh kinh nghiệm vi phạm nguyên lý nào:",
        "options_raw": [
          "A. Tất cả các phương án",
          "B. Nguyên lý về sự phát triển",
          "*C. Nguyên lý thống nhất giữa lý luận với thực tiễn",
          "D. Nguyên lý về mối liên hệ phổ biến"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Nguyên lý về sự phát triển"
          },
          {
            "letter": "C",
            "text": "Nguyên lý thống nhất giữa lý luận với thực tiễn"
          },
          {
            "letter": "D",
            "text": "Nguyên lý về mối liên hệ phổ biến"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Nguyên lý thống nhất giữa lý luận với thực tiễn"
      },
      {
        "q_num": 29,
        "orig_id": 173,
        "title_raw": "Câu 29.[!b:$ Quốc gia nào sau đây trong lịch sử đã từng phát triển bỏ qua một vài hình thái kinh tế - xã hội:$]",
        "clean_text": "Quốc gia nào sau đây trong lịch sử đã từng phát triển bỏ qua một vài hình thái kinh tế - xã hội:",
        "options_raw": [
          "*A. Hoa Kỳ, Ôtxtrâylia và Việt Nam",
          "B. Nga và Ucraina",
          "C. Việt Nam, Pháp và Nga",
          "D. Đức và Italia"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hoa Kỳ, Ôtxtrâylia và Việt Nam"
          },
          {
            "letter": "B",
            "text": "Nga và Ucraina"
          },
          {
            "letter": "C",
            "text": "Việt Nam, Pháp và Nga"
          },
          {
            "letter": "D",
            "text": "Đức và Italia"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Hoa Kỳ, Ôtxtrâylia và Việt Nam"
      },
      {
        "q_num": 30,
        "orig_id": 16,
        "title_raw": "Câu 30.[!b:$ Cơ sở của liên minh công - nông trong cuộc đấu tranh giai cấp của giai cấp công nhân chống giai cấp tư sản là gì?$]",
        "clean_text": "Cơ sở của liên minh công - nông trong cuộc đấu tranh giai cấp của giai cấp công nhân chống giai cấp tư sản là gì?",
        "options_raw": [
          "A. Cùng địa vị",
          "B. Mục tiêu lý tưởng",
          "*C. Thống nhất về lợi ích cơ bản",
          "D. Mang bản chất cách mạng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cùng địa vị"
          },
          {
            "letter": "B",
            "text": "Mục tiêu lý tưởng"
          },
          {
            "letter": "C",
            "text": "Thống nhất về lợi ích cơ bản"
          },
          {
            "letter": "D",
            "text": "Mang bản chất cách mạng"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Thống nhất về lợi ích cơ bản"
      }
    ]
  },
  {
    "test_num": 5,
    "title": "Đề trắc nghiệm số 5",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 124,
        "title_raw": "Câu 1.[!b:$ Chọn câu trả lời đúng theo quan điểm của triết học Mác - Lênin:$]",
        "clean_text": "Chọn câu trả lời đúng theo quan điểm của triết học Mác - Lênin:",
        "options_raw": [
          "*A. Phát triển của sự vật có tính kế thừa nhưng trên cơ sở có phê phán, lọc bỏ, cải tạo và phát triển cái cũ",
          "B. Phát triển của sự vật không có tính kế thừa",
          "C. Phát triển của sự vật không bao gồm sự thụt lùi tạm thời",
          "D. Phát triển là sự kế thừa nguyên xi cái cũ hoặc lắp ghép từ cái cũ sang cái mới một cách máy móc về hình thức"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phát triển của sự vật có tính kế thừa nhưng trên cơ sở có phê phán, lọc bỏ, cải tạo và phát triển cái cũ"
          },
          {
            "letter": "B",
            "text": "Phát triển của sự vật không có tính kế thừa"
          },
          {
            "letter": "C",
            "text": "Phát triển của sự vật không bao gồm sự thụt lùi tạm thời"
          },
          {
            "letter": "D",
            "text": "Phát triển là sự kế thừa nguyên xi cái cũ hoặc lắp ghép từ cái cũ sang cái mới một cách máy móc về hình thức"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Phát triển của sự vật có tính kế thừa nhưng trên cơ sở có phê phán, lọc bỏ, cải tạo và phát triển cái cũ"
      },
      {
        "q_num": 2,
        "orig_id": 161,
        "title_raw": "Câu 2.[!b:$ Ý thức xã hội tác động trở lại tồn tại xã hội là do:$]",
        "clean_text": "Ý thức xã hội tác động trở lại tồn tại xã hội là do:",
        "options_raw": [
          "A. Ý thức xã hội do thần linh tạo ra",
          "*B. Ý thức xã hội nảy sinh từ tồn tại xã hội, thông qua hoạt động thực tiễn của con người.",
          "C. Ý thức xã hội độc lập hoàn toàn với tồn tại xã hội",
          "D. Ý thức xã hội có mục đích riêng của nó"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Ý thức xã hội do thần linh tạo ra"
          },
          {
            "letter": "B",
            "text": "Ý thức xã hội nảy sinh từ tồn tại xã hội, thông qua hoạt động thực tiễn của con người."
          },
          {
            "letter": "C",
            "text": "Ý thức xã hội độc lập hoàn toàn với tồn tại xã hội"
          },
          {
            "letter": "D",
            "text": "Ý thức xã hội có mục đích riêng của nó"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Ý thức xã hội nảy sinh từ tồn tại xã hội, thông qua hoạt động thực tiễn của con người."
      },
      {
        "q_num": 3,
        "orig_id": 144,
        "title_raw": "Câu 3.[!b:$ Luận điểm: “Khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc” được nêu trong đại hội Đảng lần thứ bao nhiêu?$]",
        "clean_text": "Luận điểm: “Khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc” được nêu trong đại hội Đảng lần thứ bao nhiêu?",
        "options_raw": [
          "A. Lần thứ XI",
          "B. Lần thứ X",
          "*C. Lần thứ XIII",
          "D. Lần thứ XII"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lần thứ XI"
          },
          {
            "letter": "B",
            "text": "Lần thứ X"
          },
          {
            "letter": "C",
            "text": "Lần thứ XIII"
          },
          {
            "letter": "D",
            "text": "Lần thứ XII"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Lần thứ XIII"
      },
      {
        "q_num": 4,
        "orig_id": 114,
        "title_raw": "Câu 4.[!b:$ Chọn phương án đúng nhất về sản xuất vật chất:$]",
        "clean_text": "Chọn phương án đúng nhất về sản xuất vật chất:",
        "options_raw": [
          "*A. Sản xuất vật chất là quá trình tạo ra của cải vật chất",
          "B. Sản xuất vật chất là quá trình tạo ra tư liệu sản xuất",
          "C. Sản xuất vật chất là quá trình con người tác động vào tự nhiên làm biến đổi tự nhiên",
          "D. Sản xuất vật chất là quá trình sản xuất xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sản xuất vật chất là quá trình tạo ra của cải vật chất"
          },
          {
            "letter": "B",
            "text": "Sản xuất vật chất là quá trình tạo ra tư liệu sản xuất"
          },
          {
            "letter": "C",
            "text": "Sản xuất vật chất là quá trình con người tác động vào tự nhiên làm biến đổi tự nhiên"
          },
          {
            "letter": "D",
            "text": "Sản xuất vật chất là quá trình sản xuất xã hội"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Sản xuất vật chất là quá trình tạo ra của cải vật chất"
      },
      {
        "q_num": 5,
        "orig_id": 184,
        "title_raw": "Câu 5.[!b:$ Luận điểm sau đây là của ai và thuộc trường phái nào: “Từ trực quan sinh động đến tư duy trừu tượng và từ tư duy trừu tượng đến thực tiễn, đó là con đường biện chứng của sự nhận thức chân lý, nhận thức thực tại khách quan”?$]",
        "clean_text": "Luận điểm sau đây là của ai và thuộc trường phái nào: “Từ trực quan sinh động đến tư duy trừu tượng và từ tư duy trừu tượng đến thực tiễn, đó là con đường biện chứng của sự nhận thức chân lý, nhận thức thực tại khách quan”?",
        "options_raw": [
          "A. Hêraclit; chủ nghĩa duy vật mộc mạc",
          "*B. Lênin; chủ nghĩa duy vật biện chứng",
          "C. Phoi-ơ-bắc; chủ nghĩa duy vật siêu hình.",
          "D. Hêgghen; chủ nghĩa duy tâm khách quan."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hêraclit; chủ nghĩa duy vật mộc mạc"
          },
          {
            "letter": "B",
            "text": "Lênin; chủ nghĩa duy vật biện chứng"
          },
          {
            "letter": "C",
            "text": "Phoi-ơ-bắc; chủ nghĩa duy vật siêu hình."
          },
          {
            "letter": "D",
            "text": "Hêgghen; chủ nghĩa duy tâm khách quan."
          }
        ],
        "correct_letter": "B",
        "correct_text": "Lênin; chủ nghĩa duy vật biện chứng"
      },
      {
        "q_num": 6,
        "orig_id": 19,
        "title_raw": "Câu 6.[!b:$ Trong xã hội có giai cấp, ý thức xã hội mang tính giai cấp là do:$]",
        "clean_text": "Trong xã hội có giai cấp, ý thức xã hội mang tính giai cấp là do:",
        "options_raw": [
          "A. Sự truyền bá tư tưởng của giai cấp thống trị.",
          "*B. Điều kiện sinh hoạt vật chất, địa vị và lợi ích của các giai cấp khác nhau",
          "C. Các giai cấp có quan niệm khác nhau về giá trị.",
          "D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự truyền bá tư tưởng của giai cấp thống trị."
          },
          {
            "letter": "B",
            "text": "Điều kiện sinh hoạt vật chất, địa vị và lợi ích của các giai cấp khác nhau"
          },
          {
            "letter": "C",
            "text": "Các giai cấp có quan niệm khác nhau về giá trị."
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Điều kiện sinh hoạt vật chất, địa vị và lợi ích của các giai cấp khác nhau"
      },
      {
        "q_num": 7,
        "orig_id": 61,
        "title_raw": "Câu 7.[!b:$ Trong một mối quan hệ nhất định cái gì xác định sự vật:$]",
        "clean_text": "Trong một mối quan hệ nhất định cái gì xác định sự vật:",
        "options_raw": [
          "A. Tính quy định về lượng",
          "B. Thuộc tính của sự vật",
          "C. Tất cả các phương án",
          "*D. Tính quy định về chất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tính quy định về lượng"
          },
          {
            "letter": "B",
            "text": "Thuộc tính của sự vật"
          },
          {
            "letter": "C",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "D",
            "text": "Tính quy định về chất"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tính quy định về chất"
      },
      {
        "q_num": 8,
        "orig_id": 110,
        "title_raw": "Câu 8.[!b:$ Trong quan hệ sản xuất, quan hệ nào giữ vai trò quyết định:$]",
        "clean_text": "Trong quan hệ sản xuất, quan hệ nào giữ vai trò quyết định:",
        "options_raw": [
          "A. Tất cả các phương án",
          "*B. Quan hệ sở hữu tư liệu sản xuất",
          "C. Quan hệ phân phối sản phẩm",
          "D. Quan hệ tổ chức, quản lý sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Quan hệ sở hữu tư liệu sản xuất"
          },
          {
            "letter": "C",
            "text": "Quan hệ phân phối sản phẩm"
          },
          {
            "letter": "D",
            "text": "Quan hệ tổ chức, quản lý sản xuất"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Quan hệ sở hữu tư liệu sản xuất"
      },
      {
        "q_num": 9,
        "orig_id": 195,
        "title_raw": "Câu 9.[!b:$ Mối quan hệ giữa mặt khách quan và mặt chủ quan của tiến trình lịch sử nhân loại đã được C.Mác đặt ra và giải quyết bằng những cặp phạm trù nào sau đây:$]",
        "clean_text": "Mối quan hệ giữa mặt khách quan và mặt chủ quan của tiến trình lịch sử nhân loại đã được C.Mác đặt ra và giải quyết bằng những cặp phạm trù nào sau đây:",
        "options_raw": [
          "A. Hoạt động tự giác và hoạt động tự phát trong sự phát triển lịch sử",
          "B. Tồn tại xã hội và ý thức xã hội, tất yếu và tự do, điều kiện khách quan và nhân tố chủ quan",
          "*C. Tồn tại xã hội và ý thức xã hội, tất yếu và tự do, điều kiện khách quan và nhân tố chủ quan, hoạt động tự giác và hoạt động tự phát trong sự phát triển lịch sử",
          "D. Cá nhân và xã hội; dân tộc và nhân loại"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hoạt động tự giác và hoạt động tự phát trong sự phát triển lịch sử"
          },
          {
            "letter": "B",
            "text": "Tồn tại xã hội và ý thức xã hội, tất yếu và tự do, điều kiện khách quan và nhân tố chủ quan"
          },
          {
            "letter": "C",
            "text": "Tồn tại xã hội và ý thức xã hội, tất yếu và tự do, điều kiện khách quan và nhân tố chủ quan, hoạt động tự giác và hoạt động tự phát trong sự phát triển lịch sử"
          },
          {
            "letter": "D",
            "text": "Cá nhân và xã hội; dân tộc và nhân loại"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tồn tại xã hội và ý thức xã hội, tất yếu và tự do, điều kiện khách quan và nhân tố chủ quan, hoạt động tự giác và hoạt động tự phát trong sự phát triển lịch sử"
      },
      {
        "q_num": 10,
        "orig_id": 13,
        "title_raw": "Câu 10.[!b:$ Chọn phương án đúng về động lực phát huy nhân tố con người ở Việt Nam hiện nay:$]",
        "clean_text": "Chọn phương án đúng về động lực phát huy nhân tố con người ở Việt Nam hiện nay:",
        "options_raw": [
          "A. Dân chủ hoá mọi mặt đời sống xã hội",
          "B. Quan tâm đến lợi ích của con người",
          "C. Coi trọng phát triển giáo dục, đào tạo",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Dân chủ hoá mọi mặt đời sống xã hội"
          },
          {
            "letter": "B",
            "text": "Quan tâm đến lợi ích của con người"
          },
          {
            "letter": "C",
            "text": "Coi trọng phát triển giáo dục, đào tạo"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 11,
        "orig_id": 34,
        "title_raw": "Câu 11.[!b:$ Ý nghĩa của phạm trù hình thái kinh tế - xã hội:$]",
        "clean_text": "Ý nghĩa của phạm trù hình thái kinh tế - xã hội:",
        "options_raw": [
          "A. Đem lại sự hiểu biết toàn diện về mọi xã hội trong lịch sử.",
          "B. Đem lại một phương pháp tiếp cận xã hội mới.",
          "*C. Đưa lại phương pháp luận xuất phát để nghiên cứu xã hội",
          "D. Đem lại sự hiểu biết đầy đủ về một xã hội cụ thể."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đem lại sự hiểu biết toàn diện về mọi xã hội trong lịch sử."
          },
          {
            "letter": "B",
            "text": "Đem lại một phương pháp tiếp cận xã hội mới."
          },
          {
            "letter": "C",
            "text": "Đưa lại phương pháp luận xuất phát để nghiên cứu xã hội"
          },
          {
            "letter": "D",
            "text": "Đem lại sự hiểu biết đầy đủ về một xã hội cụ thể."
          }
        ],
        "correct_letter": "C",
        "correct_text": "Đưa lại phương pháp luận xuất phát để nghiên cứu xã hội"
      },
      {
        "q_num": 12,
        "orig_id": 194,
        "title_raw": "Câu 12.[!b:$ Phép biện chứng duy vật là gì?$]",
        "clean_text": "Phép biện chứng duy vật là gì?",
        "options_raw": [
          "*A. Là khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, của xã hội loài người và của tư duy.",
          "B. Là khoa học nghiên cứu về mối liên hệ phổ biến và về sự phát triển của sự sự vật, hiện tượng trong tự nhiên.",
          "C. Là khoa học nghiên cứu về sự phát triển của các sự vật, hiện tượng xung quanh chúng ta",
          "D. Là khoa học nghiên cứu về sự vận động, phát triển của các sự sự vật, hiện tượng trong tự nhiên, xã hội và tư duy."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, của xã hội loài người và của tư duy."
          },
          {
            "letter": "B",
            "text": "Là khoa học nghiên cứu về mối liên hệ phổ biến và về sự phát triển của sự sự vật, hiện tượng trong tự nhiên."
          },
          {
            "letter": "C",
            "text": "Là khoa học nghiên cứu về sự phát triển của các sự vật, hiện tượng xung quanh chúng ta"
          },
          {
            "letter": "D",
            "text": "Là khoa học nghiên cứu về sự vận động, phát triển của các sự sự vật, hiện tượng trong tự nhiên, xã hội và tư duy."
          }
        ],
        "correct_letter": "A",
        "correct_text": "Là khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, của xã hội loài người và của tư duy."
      },
      {
        "q_num": 13,
        "orig_id": 153,
        "title_raw": "Câu 13.[!b:$ Bảo vệ nền tảng tư tưởng của Đảng, đấu tranh chống các quan điểm sai trái, thù địch hiện nay được rút ra từ tính độc lập tương đối nào của ý thức xã hội:$]",
        "clean_text": "Bảo vệ nền tảng tư tưởng của Đảng, đấu tranh chống các quan điểm sai trái, thù địch hiện nay được rút ra từ tính độc lập tương đối nào của ý thức xã hội:",
        "options_raw": [
          "A. Từ tính kế thừa của ý thức xã hội",
          "B. Từ tính vượt trước của ý thức xã hội",
          "C. Từ tính tác động lẫn nhau của ý thức xã hội",
          "*D. Từ tính lạc hậu của ý thức xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Từ tính kế thừa của ý thức xã hội"
          },
          {
            "letter": "B",
            "text": "Từ tính vượt trước của ý thức xã hội"
          },
          {
            "letter": "C",
            "text": "Từ tính tác động lẫn nhau của ý thức xã hội"
          },
          {
            "letter": "D",
            "text": "Từ tính lạc hậu của ý thức xã hội"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Từ tính lạc hậu của ý thức xã hội"
      },
      {
        "q_num": 14,
        "orig_id": 133,
        "title_raw": "Câu 14.[!b:$ Phạm trù ý thức theo triết học Mác - Lênin được hiểu là:$]",
        "clean_text": "Phạm trù ý thức theo triết học Mác - Lênin được hiểu là:",
        "options_raw": [
          "A. Sự hồi tưởng của linh hồn vũ trụ",
          "B. Tất cả các phương án",
          "C. Ý thức của lực lượng siêu nhiên",
          "*D. Hình ảnh chủ quan của thế giới khách quan"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự hồi tưởng của linh hồn vũ trụ"
          },
          {
            "letter": "B",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "C",
            "text": "Ý thức của lực lượng siêu nhiên"
          },
          {
            "letter": "D",
            "text": "Hình ảnh chủ quan của thế giới khách quan"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Hình ảnh chủ quan của thế giới khách quan"
      },
      {
        "q_num": 15,
        "orig_id": 196,
        "title_raw": "Câu 15.[!b:$ Luận điểm: “Kiên định và không ngừng vận dụng, phát triển sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh phù hợp với thực tiễn Việt Nam trong từng giai đoạn” được nêu ở Đại hội Đảng lần thứ bao nhiêu?$]",
        "clean_text": "Luận điểm: “Kiên định và không ngừng vận dụng, phát triển sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh phù hợp với thực tiễn Việt Nam trong từng giai đoạn” được nêu ở Đại hội Đảng lần thứ bao nhiêu?",
        "options_raw": [
          "A. Lần thứ XII",
          "B. Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (2011)",
          "C. Lần thứ XI",
          "*D. Lần thứ XIII"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lần thứ XII"
          },
          {
            "letter": "B",
            "text": "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (2011)"
          },
          {
            "letter": "C",
            "text": "Lần thứ XI"
          },
          {
            "letter": "D",
            "text": "Lần thứ XIII"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Lần thứ XIII"
      },
      {
        "q_num": 16,
        "orig_id": 123,
        "title_raw": "Câu 16.[!b:$ Chọn câu trả lời đúng theo quan điểm của triết học Mác - Lênin:$]",
        "clean_text": "Chọn câu trả lời đúng theo quan điểm của triết học Mác - Lênin:",
        "options_raw": [
          "A. Nguồn gốc của sự phát triển là ở bên ngoài sự sự vật, hiện tượng",
          "B. Nguồn gốc của sự phát triển là sự kết hợp giữa con người và sự vật",
          "*C. Nguồn gốc của sự phát triển là do mâu thuẫn bên trong của sự sự vật, hiện tượng quy định",
          "D. Nguồn gốc của sự phát triển của sự sự vật, hiện tượng là do ý thức quy định"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguồn gốc của sự phát triển là ở bên ngoài sự sự vật, hiện tượng"
          },
          {
            "letter": "B",
            "text": "Nguồn gốc của sự phát triển là sự kết hợp giữa con người và sự vật"
          },
          {
            "letter": "C",
            "text": "Nguồn gốc của sự phát triển là do mâu thuẫn bên trong của sự sự vật, hiện tượng quy định"
          },
          {
            "letter": "D",
            "text": "Nguồn gốc của sự phát triển của sự sự vật, hiện tượng là do ý thức quy định"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Nguồn gốc của sự phát triển là do mâu thuẫn bên trong của sự sự vật, hiện tượng quy định"
      },
      {
        "q_num": 17,
        "orig_id": 190,
        "title_raw": "Câu 17.[!b:$ Chọn phương án trả lời sai:$]",
        "clean_text": "Chọn phương án trả lời sai:",
        "options_raw": [
          "A. Ý thức với tư cách là hoạt động phản ánh sáng tạo không thể có được ở bên ngoài quá trình con người lao động làm biến đổi thế giới xung quanh.",
          "B. Lao động không xuất hiện ở trạng thái đơn nhất, ngay từ đầu nó đã mang tính tập thể xã hội.",
          "*C. Con người có thể phản ánh đúng đắn thế giới khách quan không cần thông qua lao động.",
          "D. Lao động là điều kiện đầu tiên và chủ yếu để con người tồn tại."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Ý thức với tư cách là hoạt động phản ánh sáng tạo không thể có được ở bên ngoài quá trình con người lao động làm biến đổi thế giới xung quanh."
          },
          {
            "letter": "B",
            "text": "Lao động không xuất hiện ở trạng thái đơn nhất, ngay từ đầu nó đã mang tính tập thể xã hội."
          },
          {
            "letter": "C",
            "text": "Con người có thể phản ánh đúng đắn thế giới khách quan không cần thông qua lao động."
          },
          {
            "letter": "D",
            "text": "Lao động là điều kiện đầu tiên và chủ yếu để con người tồn tại."
          }
        ],
        "correct_letter": "C",
        "correct_text": "Con người có thể phản ánh đúng đắn thế giới khách quan không cần thông qua lao động."
      },
      {
        "q_num": 18,
        "orig_id": 67,
        "title_raw": "Câu 18.[!b:$ Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:$]",
        "clean_text": "Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:",
        "options_raw": [
          "A. Quan điểm toàn diện không bao hàm quan điểm lịch sử - cụ thể",
          "*B. Quan điểm toàn diện đã bao hàm quan điểm lịch sử - cụ thể",
          "C. Quan điểm toàn diện bao hàm quan điểm phát triển",
          "D. Quan điểm toàn diện không bao hàm quan điểm lịch sử - cụ thể mà chỉ bao hàm quan điểm phát triển"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan điểm toàn diện không bao hàm quan điểm lịch sử - cụ thể"
          },
          {
            "letter": "B",
            "text": "Quan điểm toàn diện đã bao hàm quan điểm lịch sử - cụ thể"
          },
          {
            "letter": "C",
            "text": "Quan điểm toàn diện bao hàm quan điểm phát triển"
          },
          {
            "letter": "D",
            "text": "Quan điểm toàn diện không bao hàm quan điểm lịch sử - cụ thể mà chỉ bao hàm quan điểm phát triển"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Quan điểm toàn diện đã bao hàm quan điểm lịch sử - cụ thể"
      },
      {
        "q_num": 19,
        "orig_id": 135,
        "title_raw": "Câu 19.[!b:$ Theo quan điểm của triết học Mác - Lênin, bệnh chủ quan, duy ý chí vi phạm nguyên tắc nào?$]",
        "clean_text": "Theo quan điểm của triết học Mác - Lênin, bệnh chủ quan, duy ý chí vi phạm nguyên tắc nào?",
        "options_raw": [
          "A. Nguyên tắc toàn diện",
          "B. Nguyên tắc phát triển",
          "*C. Nguyên tắc khách quan",
          "D. Nguyên tắc lịch sử - cụ thể"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguyên tắc toàn diện"
          },
          {
            "letter": "B",
            "text": "Nguyên tắc phát triển"
          },
          {
            "letter": "C",
            "text": "Nguyên tắc khách quan"
          },
          {
            "letter": "D",
            "text": "Nguyên tắc lịch sử - cụ thể"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Nguyên tắc khách quan"
      },
      {
        "q_num": 20,
        "orig_id": 171,
        "title_raw": "Câu 20.[!b:$ Luận điểm sau của C.Mác: “Sự tồn tại của các giai cấp chỉ gắn liền với những giai đoạn phát triển lịch sử nhất định của sản xuất” được hiểu theo nghĩa:$]",
        "clean_text": "Luận điểm sau của C.Mác: “Sự tồn tại của các giai cấp chỉ gắn liền với những giai đoạn phát triển lịch sử nhất định của sản xuất” được hiểu theo nghĩa:",
        "options_raw": [
          "A. Giai cấp chỉ là một hiện tượng lịch sử",
          "*B. Sự tồn tại giai cấp chỉ gắn liền với các giai đoạn phát triển nhất định của sản xuất. Giai cấp chỉ là một phạm trù lịch sử",
          "C. Tất cả các phương án",
          "D. Sự tồn tại của giai cấp gắn liền với lịch sử của sản xuất."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giai cấp chỉ là một hiện tượng lịch sử"
          },
          {
            "letter": "B",
            "text": "Sự tồn tại giai cấp chỉ gắn liền với các giai đoạn phát triển nhất định của sản xuất. Giai cấp chỉ là một phạm trù lịch sử"
          },
          {
            "letter": "C",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "D",
            "text": "Sự tồn tại của giai cấp gắn liền với lịch sử của sản xuất."
          }
        ],
        "correct_letter": "B",
        "correct_text": "Sự tồn tại giai cấp chỉ gắn liền với các giai đoạn phát triển nhất định của sản xuất. Giai cấp chỉ là một phạm trù lịch sử"
      },
      {
        "q_num": 21,
        "orig_id": 175,
        "title_raw": "Câu 21.[!b:$ Xuất phát điểm để C.Mác nghiên cứu hình thái kinh tế- xã hội là gì?$]",
        "clean_text": "Xuất phát điểm để C.Mác nghiên cứu hình thái kinh tế- xã hội là gì?",
        "options_raw": [
          "*A. Sản xuất vật chất",
          "B. Sản xuất tinh thần",
          "C. Quan hệ sản xuất",
          "D. Lực lượng sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sản xuất vật chất"
          },
          {
            "letter": "B",
            "text": "Sản xuất tinh thần"
          },
          {
            "letter": "C",
            "text": "Quan hệ sản xuất"
          },
          {
            "letter": "D",
            "text": "Lực lượng sản xuất"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Sản xuất vật chất"
      },
      {
        "q_num": 22,
        "orig_id": 130,
        "title_raw": "Câu 22.[!b:$ Mối liên hệ không có tính chất nào sau đây:$]",
        "clean_text": "Mối liên hệ không có tính chất nào sau đây:",
        "options_raw": [
          "A. Tính khách quan",
          "B. Tính phổ biến",
          "C. Tính phong phú, nhiều vẻ",
          "*D. Tính kế thừa"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tính khách quan"
          },
          {
            "letter": "B",
            "text": "Tính phổ biến"
          },
          {
            "letter": "C",
            "text": "Tính phong phú, nhiều vẻ"
          },
          {
            "letter": "D",
            "text": "Tính kế thừa"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tính kế thừa"
      },
      {
        "q_num": 23,
        "orig_id": 149,
        "title_raw": "Câu 23.[!b:$ Luận điểm: “Nhân dân là trung tâm, là chủ thể của công cuộc đổi mới, xây dựng và bảo vệ Tổ quốc; mọi chủ trương phải thực sự xuất phát tự yêu cầu, nguyện vọng, quyền và lợi ích hợp pháp chính đáng của nhân dân” được nêu trong đại hội Đảng lần thứ mấy?$]",
        "clean_text": "Luận điểm: “Nhân dân là trung tâm, là chủ thể của công cuộc đổi mới, xây dựng và bảo vệ Tổ quốc; mọi chủ trương phải thực sự xuất phát tự yêu cầu, nguyện vọng, quyền và lợi ích hợp pháp chính đáng của nhân dân” được nêu trong đại hội Đảng lần thứ mấy?",
        "options_raw": [
          "A. Lần thứ X",
          "B. Lần thứ XI",
          "C. Lần thứ XII",
          "*D. Lần thứ XIII"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lần thứ X"
          },
          {
            "letter": "B",
            "text": "Lần thứ XI"
          },
          {
            "letter": "C",
            "text": "Lần thứ XII"
          },
          {
            "letter": "D",
            "text": "Lần thứ XIII"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Lần thứ XIII"
      },
      {
        "q_num": 24,
        "orig_id": 30,
        "title_raw": "Câu 24.[!b:$ Tính chất đối kháng của kiến trúc thượng tầng xuất hiện do đâu?$]",
        "clean_text": "Tính chất đối kháng của kiến trúc thượng tầng xuất hiện do đâu?",
        "options_raw": [
          "A. Giai cấp thống trị xã hội",
          "B. Do mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất",
          "*C. Tính đối kháng trong cơ sở hạ tầng sinh ra nó",
          "D. Ý chí của lực lượng siêu nhiên"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giai cấp thống trị xã hội"
          },
          {
            "letter": "B",
            "text": "Do mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất"
          },
          {
            "letter": "C",
            "text": "Tính đối kháng trong cơ sở hạ tầng sinh ra nó"
          },
          {
            "letter": "D",
            "text": "Ý chí của lực lượng siêu nhiên"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tính đối kháng trong cơ sở hạ tầng sinh ra nó"
      },
      {
        "q_num": 25,
        "orig_id": 128,
        "title_raw": "Câu 25.[!b:$ Chọn phương án đúng theo quan điểm của triết học Mác - Lênin:$]",
        "clean_text": "Chọn phương án đúng theo quan điểm của triết học Mác - Lênin:",
        "options_raw": [
          "A. Tất cả các phương án",
          "*B. Độ là phạm trù chỉ giới hạn biến đổi của lượng, trong đó chưa làm thay đổi chất của sự vật",
          "C. Độ là phạm trù chỉ sự biến đổi của chất",
          "D. Độ là phạm trù chỉ sự biến đổi của lượng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Độ là phạm trù chỉ giới hạn biến đổi của lượng, trong đó chưa làm thay đổi chất của sự vật"
          },
          {
            "letter": "C",
            "text": "Độ là phạm trù chỉ sự biến đổi của chất"
          },
          {
            "letter": "D",
            "text": "Độ là phạm trù chỉ sự biến đổi của lượng"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Độ là phạm trù chỉ giới hạn biến đổi của lượng, trong đó chưa làm thay đổi chất của sự vật"
      },
      {
        "q_num": 26,
        "orig_id": 142,
        "title_raw": "Câu 26.[!b:$ Yêu cầu phát huy nhân tố con người trong quân đội ta hiện nay:$]",
        "clean_text": "Yêu cầu phát huy nhân tố con người trong quân đội ta hiện nay:",
        "options_raw": [
          "*A. Tất cả các phương án",
          "B. Dân chủ hóa đời sống, xây dựng môi trường văn hóa lành mạnh",
          "C. Giải quyết hài hòa vấn đề lợi ích",
          "D. Phát triển, bồi dưỡng năng lực toàn diện cho cán bộ, chiến sĩ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Dân chủ hóa đời sống, xây dựng môi trường văn hóa lành mạnh"
          },
          {
            "letter": "C",
            "text": "Giải quyết hài hòa vấn đề lợi ích"
          },
          {
            "letter": "D",
            "text": "Phát triển, bồi dưỡng năng lực toàn diện cho cán bộ, chiến sĩ"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 27,
        "orig_id": 103,
        "title_raw": "Câu 27.[!b:$ Cách viết nào sau đây là đúng:$]",
        "clean_text": "Cách viết nào sau đây là đúng:",
        "options_raw": [
          "*A. Hình thái kinh tế - xã hội",
          "B. Hình thái kinh tế, xã hội",
          "C. Hình thái kinh tế của xã hội",
          "D. Hình thái kinh tế và xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hình thái kinh tế - xã hội"
          },
          {
            "letter": "B",
            "text": "Hình thái kinh tế, xã hội"
          },
          {
            "letter": "C",
            "text": "Hình thái kinh tế của xã hội"
          },
          {
            "letter": "D",
            "text": "Hình thái kinh tế và xã hội"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Hình thái kinh tế - xã hội"
      },
      {
        "q_num": 28,
        "orig_id": 24,
        "title_raw": "Câu 28.[!b:$ Luận điểm sau của C.Mác: “Sự tồn tại của các giai cấp chỉ gắn liền với những giai đoạn phát triển lịch sử nhất định của sản xuất” được hiểu theo nghĩa:$]",
        "clean_text": "Luận điểm sau của C.Mác: “Sự tồn tại của các giai cấp chỉ gắn liền với những giai đoạn phát triển lịch sử nhất định của sản xuất” được hiểu theo nghĩa:",
        "options_raw": [
          "A. Giai cấp chỉ là hiện tượng lịch sử",
          "B. Sự tồn tại của giai cấp gắn liền với lịch sử của sản xuất",
          "C. Giai cấp tồn tại vĩnh viễn",
          "*D. Giai cấp chỉ là một phạm trù lịch sử, sự tồn tại giai cấp gắn liền với các giai đoạn phát triển nhất định của sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giai cấp chỉ là hiện tượng lịch sử"
          },
          {
            "letter": "B",
            "text": "Sự tồn tại của giai cấp gắn liền với lịch sử của sản xuất"
          },
          {
            "letter": "C",
            "text": "Giai cấp tồn tại vĩnh viễn"
          },
          {
            "letter": "D",
            "text": "Giai cấp chỉ là một phạm trù lịch sử, sự tồn tại giai cấp gắn liền với các giai đoạn phát triển nhất định của sản xuất"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Giai cấp chỉ là một phạm trù lịch sử, sự tồn tại giai cấp gắn liền với các giai đoạn phát triển nhất định của sản xuất"
      },
      {
        "q_num": 29,
        "orig_id": 109,
        "title_raw": "Câu 29.[!b:$ Tính chất của lực lượng sản xuất  là:$]",
        "clean_text": "Tính chất của lực lượng sản xuất  là:",
        "options_raw": [
          "A. Tất cả các phương án",
          "*B. Tính chất cá nhân và tính chất xã hội",
          "C. Tính chất hiện đại và tính chất cá nhân",
          "D. Tính chất xã hội và tính chất hiện đại"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Tính chất cá nhân và tính chất xã hội"
          },
          {
            "letter": "C",
            "text": "Tính chất hiện đại và tính chất cá nhân"
          },
          {
            "letter": "D",
            "text": "Tính chất xã hội và tính chất hiện đại"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tính chất cá nhân và tính chất xã hội"
      },
      {
        "q_num": 30,
        "orig_id": 119,
        "title_raw": "Câu 30.[!b:$ Theo quan điểm của triết học Mác - Lênin, sự thống nhất của các mặt đối lập có biểu hiện:$]",
        "clean_text": "Theo quan điểm của triết học Mác - Lênin, sự thống nhất của các mặt đối lập có biểu hiện:",
        "options_raw": [
          "*A. Tất cả các phương án",
          "B. Sự cùng tồn tại, nương tựa nhau",
          "C. Sự tác động ngang bằng nhau",
          "D. Sự bài trừ, phủ định nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Sự cùng tồn tại, nương tựa nhau"
          },
          {
            "letter": "C",
            "text": "Sự tác động ngang bằng nhau"
          },
          {
            "letter": "D",
            "text": "Sự bài trừ, phủ định nhau"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tất cả các phương án"
      }
    ]
  },
  {
    "test_num": 6,
    "title": "Đề trắc nghiệm số 6",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 94,
        "title_raw": "Câu 1.[!b:$ Lựa chọn phương án sai về đấu tranh giai cấp:$]",
        "clean_text": "Lựa chọn phương án sai về đấu tranh giai cấp:",
        "options_raw": [
          "A. Đấu tranh giai cấp là đấu tranh của những tập đoàn người có lợi ích căn bản đối lập nhau",
          "B. Đấu tranh giai cấp là quy luật phát triển xã hội có giai cấp",
          "C. Đấu tranh giai cấp là động lực trực tiếp của lịch sử",
          "*D. Đấu tranh giai cấp là đấu tranh của các tập đoàn người có quan điểm trái ngược nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đấu tranh giai cấp là đấu tranh của những tập đoàn người có lợi ích căn bản đối lập nhau"
          },
          {
            "letter": "B",
            "text": "Đấu tranh giai cấp là quy luật phát triển xã hội có giai cấp"
          },
          {
            "letter": "C",
            "text": "Đấu tranh giai cấp là động lực trực tiếp của lịch sử"
          },
          {
            "letter": "D",
            "text": "Đấu tranh giai cấp là đấu tranh của các tập đoàn người có quan điểm trái ngược nhau"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Đấu tranh giai cấp là đấu tranh của các tập đoàn người có quan điểm trái ngược nhau"
      },
      {
        "q_num": 2,
        "orig_id": 95,
        "title_raw": "Câu 2.[!b:$ Sự phân chia giai cấp trong xã hội bắt đầu từ hình thái kinh tế - xã hội nào?$]",
        "clean_text": "Sự phân chia giai cấp trong xã hội bắt đầu từ hình thái kinh tế - xã hội nào?",
        "options_raw": [
          "A. Phong kiến",
          "B. Cộng sản nguyên thuỷ",
          "*C. Chiếm hữu nô lệ",
          "D. Tư bản chủ nghĩa"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phong kiến"
          },
          {
            "letter": "B",
            "text": "Cộng sản nguyên thuỷ"
          },
          {
            "letter": "C",
            "text": "Chiếm hữu nô lệ"
          },
          {
            "letter": "D",
            "text": "Tư bản chủ nghĩa"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Chiếm hữu nô lệ"
      },
      {
        "q_num": 3,
        "orig_id": 7,
        "title_raw": "Câu 3.[!b:$ Vai trò của ý thức cá nhân đối với ý thức xã hội:$]",
        "clean_text": "Vai trò của ý thức cá nhân đối với ý thức xã hội:",
        "options_raw": [
          "A. Ý thức cá nhân độc lập với ý thức xã hội",
          "*B. Ý thức cá nhân là phương thức tồn tại và biểu hiện của ý thức xã hội",
          "C. Ý thức cá nhân quyết định ý thức xã hội",
          "D. Tổng số ý thức cá nhân bằng ý thức xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Ý thức cá nhân độc lập với ý thức xã hội"
          },
          {
            "letter": "B",
            "text": "Ý thức cá nhân là phương thức tồn tại và biểu hiện của ý thức xã hội"
          },
          {
            "letter": "C",
            "text": "Ý thức cá nhân quyết định ý thức xã hội"
          },
          {
            "letter": "D",
            "text": "Tổng số ý thức cá nhân bằng ý thức xã hội"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Ý thức cá nhân là phương thức tồn tại và biểu hiện của ý thức xã hội"
      },
      {
        "q_num": 4,
        "orig_id": 80,
        "title_raw": "Câu 4.[!b:$ Điểm xuất phát để con người đặt ra mục đích hoạt động là gì?$]",
        "clean_text": "Điểm xuất phát để con người đặt ra mục đích hoạt động là gì?",
        "options_raw": [
          "*A. Điều kiện khách quan",
          "B. Năng lực của họ",
          "C. Nhu cầu và lợi ích",
          "D. Hoàn cảnh sống"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Điều kiện khách quan"
          },
          {
            "letter": "B",
            "text": "Năng lực của họ"
          },
          {
            "letter": "C",
            "text": "Nhu cầu và lợi ích"
          },
          {
            "letter": "D",
            "text": "Hoàn cảnh sống"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Điều kiện khách quan"
      },
      {
        "q_num": 5,
        "orig_id": 148,
        "title_raw": "Câu 5.[!b:$ Hoàn thiện luận điểm theo Đại hội XIII: “Phát triển con người toàn diện và xây dựng nền văn hóa Việt Nam ………”?$]",
        "clean_text": "Hoàn thiện luận điểm theo Đại hội XIII: “Phát triển con người toàn diện và xây dựng nền văn hóa Việt Nam ………”?",
        "options_raw": [
          "A. Hiện đại và bản sắc dân tộc",
          "*B. Tiên tiến, đậm đà bản sắc dân tộc",
          "C. Đậm đà bản sắc dân tộc",
          "D. Hòa nhập và phát triển"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hiện đại và bản sắc dân tộc"
          },
          {
            "letter": "B",
            "text": "Tiên tiến, đậm đà bản sắc dân tộc"
          },
          {
            "letter": "C",
            "text": "Đậm đà bản sắc dân tộc"
          },
          {
            "letter": "D",
            "text": "Hòa nhập và phát triển"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tiên tiến, đậm đà bản sắc dân tộc"
      },
      {
        "q_num": 6,
        "orig_id": 37,
        "title_raw": "Câu 6.[!b:$ Tính chất xã hội hoá cao của lực lượng sản xuất được bắt đầu từ xã hội nào?$]",
        "clean_text": "Tính chất xã hội hoá cao của lực lượng sản xuất được bắt đầu từ xã hội nào?",
        "options_raw": [
          "A. Xã hội phong kiến",
          "B. Xã hội xã hội chủ nghĩa",
          "C. Xã hội chiếm hữu nô lệ.",
          "*D. Xã hội tư bản chủ nghĩa"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Xã hội phong kiến"
          },
          {
            "letter": "B",
            "text": "Xã hội xã hội chủ nghĩa"
          },
          {
            "letter": "C",
            "text": "Xã hội chiếm hữu nô lệ."
          },
          {
            "letter": "D",
            "text": "Xã hội tư bản chủ nghĩa"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Xã hội tư bản chủ nghĩa"
      },
      {
        "q_num": 7,
        "orig_id": 118,
        "title_raw": "Câu 7.[!b:$ Quy luật thống nhất và đấu tranh của các mặt đối lập chỉ rõ vấn đề gì?$]",
        "clean_text": "Quy luật thống nhất và đấu tranh của các mặt đối lập chỉ rõ vấn đề gì?",
        "options_raw": [
          "A. Khuynh hướng của sự phát triển",
          "*B. Nguồn gốc, động lực của sự phát triển",
          "C. Phương thức của sự phát triển",
          "D. Cách thức của sự phát triển"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Khuynh hướng của sự phát triển"
          },
          {
            "letter": "B",
            "text": "Nguồn gốc, động lực của sự phát triển"
          },
          {
            "letter": "C",
            "text": "Phương thức của sự phát triển"
          },
          {
            "letter": "D",
            "text": "Cách thức của sự phát triển"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Nguồn gốc, động lực của sự phát triển"
      },
      {
        "q_num": 8,
        "orig_id": 179,
        "title_raw": "Câu 8.[!b:$ Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây sai:$]",
        "clean_text": "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây sai:",
        "options_raw": [
          "*A. Lý luận có thể phát triển không cần thực tiễn.",
          "B. Lý luận không có thực tiễn là lý luận suông",
          "C. Tất cả các phương án",
          "D. Thực tiễn không có lý luận là thực tiễn mù quáng."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lý luận có thể phát triển không cần thực tiễn."
          },
          {
            "letter": "B",
            "text": "Lý luận không có thực tiễn là lý luận suông"
          },
          {
            "letter": "C",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "D",
            "text": "Thực tiễn không có lý luận là thực tiễn mù quáng."
          }
        ],
        "correct_letter": "A",
        "correct_text": "Lý luận có thể phát triển không cần thực tiễn."
      },
      {
        "q_num": 9,
        "orig_id": 75,
        "title_raw": "Câu 9.[!b:$ Chọn phương án sai theo quan điểm của triết học Mác - Lênin:$]",
        "clean_text": "Chọn phương án sai theo quan điểm của triết học Mác - Lênin:",
        "options_raw": [
          "A. Nguồn gốc trực tiếp quan trọng nhất quyết định sự ra đời và phát triển của ý thức là lao động, là thực tiễn xã hội",
          "B. ý thức là sản phẩm xã hội, là một hiện tượng xã hội",
          "*C. ý thức thuần tuý là hiện tượng cá nhân",
          "D. ý thức phản ánh hiện thực khách quan vào bộ óc con người thông qua lao động, ngôn ngữ và các quan hệ xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguồn gốc trực tiếp quan trọng nhất quyết định sự ra đời và phát triển của ý thức là lao động, là thực tiễn xã hội"
          },
          {
            "letter": "B",
            "text": "ý thức là sản phẩm xã hội, là một hiện tượng xã hội"
          },
          {
            "letter": "C",
            "text": "ý thức thuần tuý là hiện tượng cá nhân"
          },
          {
            "letter": "D",
            "text": "ý thức phản ánh hiện thực khách quan vào bộ óc con người thông qua lao động, ngôn ngữ và các quan hệ xã hội"
          }
        ],
        "correct_letter": "C",
        "correct_text": "ý thức thuần tuý là hiện tượng cá nhân"
      },
      {
        "q_num": 10,
        "orig_id": 138,
        "title_raw": "Câu 10.[!b:$ Theo quan điểm của triết học Mác - Lênin, quan hệ khách quan - chủ quan:$]",
        "clean_text": "Theo quan điểm của triết học Mác - Lênin, quan hệ khách quan - chủ quan:",
        "options_raw": [
          "A. Chủ quan quyết định khách quan",
          "B. Chủ quan không tác động tới khách quan",
          "C. Khách quan quyết định chủ quan tuyệt đối",
          "*D. Có quan hệ biện chứng với nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chủ quan quyết định khách quan"
          },
          {
            "letter": "B",
            "text": "Chủ quan không tác động tới khách quan"
          },
          {
            "letter": "C",
            "text": "Khách quan quyết định chủ quan tuyệt đối"
          },
          {
            "letter": "D",
            "text": "Có quan hệ biện chứng với nhau"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Có quan hệ biện chứng với nhau"
      },
      {
        "q_num": 11,
        "orig_id": 191,
        "title_raw": "Câu 11.[!b:$ Quan điểm của Đảng ta: “Thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển, đa dạng hóa, đa phương hóa quan hệ đối ngoại” xuất phát từ cơ sở lý luận nào?$]",
        "clean_text": "Quan điểm của Đảng ta: “Thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển, đa dạng hóa, đa phương hóa quan hệ đối ngoại” xuất phát từ cơ sở lý luận nào?",
        "options_raw": [
          "A. Nguyên lý về sự phát triển",
          "B. Tất cả các phương án",
          "C. Nguyên lý thống nhất giữa lý luận với thực tiễn",
          "*D. Nguyên lý về mối liên hệ phổ biến"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguyên lý về sự phát triển"
          },
          {
            "letter": "B",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "C",
            "text": "Nguyên lý thống nhất giữa lý luận với thực tiễn"
          },
          {
            "letter": "D",
            "text": "Nguyên lý về mối liên hệ phổ biến"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Nguyên lý về mối liên hệ phổ biến"
      },
      {
        "q_num": 12,
        "orig_id": 23,
        "title_raw": "Câu 12.[!b:$ Nhận định nào sau đây đúng?$]",
        "clean_text": "Nhận định nào sau đây đúng?",
        "options_raw": [
          "A. Lợi ích giai cấp và lợi ích dân tộc luôn thống nhất với nhau",
          "B. Lợi ích giai cấp và lợi ích dân tộc luôn mâu thuẫn với nhau",
          "*C. Lợi ích giai cấp và lợi ích dân tộc vừa thống nhất vừa mâu thuẫn",
          "D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lợi ích giai cấp và lợi ích dân tộc luôn thống nhất với nhau"
          },
          {
            "letter": "B",
            "text": "Lợi ích giai cấp và lợi ích dân tộc luôn mâu thuẫn với nhau"
          },
          {
            "letter": "C",
            "text": "Lợi ích giai cấp và lợi ích dân tộc vừa thống nhất vừa mâu thuẫn"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Lợi ích giai cấp và lợi ích dân tộc vừa thống nhất vừa mâu thuẫn"
      },
      {
        "q_num": 13,
        "orig_id": 88,
        "title_raw": "Câu 13.[!b:$ Đấu tranh giai cấp,xét đến cùng là nhằm:$]",
        "clean_text": "Đấu tranh giai cấp,xét đến cùng là nhằm:",
        "options_raw": [
          "A. Lật đổ sự áp bức của giai cấp thống trị bóc lột",
          "B. Giành chính quyền nhà nước",
          "C. Giải quyết mâu thuẫn giai cấp",
          "*D. Phát triển sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lật đổ sự áp bức của giai cấp thống trị bóc lột"
          },
          {
            "letter": "B",
            "text": "Giành chính quyền nhà nước"
          },
          {
            "letter": "C",
            "text": "Giải quyết mâu thuẫn giai cấp"
          },
          {
            "letter": "D",
            "text": "Phát triển sản xuất"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Phát triển sản xuất"
      },
      {
        "q_num": 14,
        "orig_id": 20,
        "title_raw": "Câu 14.[!b:$ Trong định nghĩa giai cấp của Lênin, địa vị của mỗi giai cấp được quy định ở những mối quan hệ cơ bản nào?$]",
        "clean_text": "Trong định nghĩa giai cấp của Lênin, địa vị của mỗi giai cấp được quy định ở những mối quan hệ cơ bản nào?",
        "options_raw": [
          "A. Quan hệ về thu nhập và quyền điều hành quản lý xã hội",
          "B. Quan hệ về tư liệu sản xuất và vai trò trong tổ chức lao động xã hội, trong tổ chức quản lý sản xuất.",
          "*C. Quan hệ về: Sở hữu tư liệu sản xuất, tổ chức quản lý sản xuất, phương thức thu nhập của cải xã hội.",
          "D. Quan hệ về dòng dõi, thành phần xuất thân"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan hệ về thu nhập và quyền điều hành quản lý xã hội"
          },
          {
            "letter": "B",
            "text": "Quan hệ về tư liệu sản xuất và vai trò trong tổ chức lao động xã hội, trong tổ chức quản lý sản xuất."
          },
          {
            "letter": "C",
            "text": "Quan hệ về: Sở hữu tư liệu sản xuất, tổ chức quản lý sản xuất, phương thức thu nhập của cải xã hội."
          },
          {
            "letter": "D",
            "text": "Quan hệ về dòng dõi, thành phần xuất thân"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Quan hệ về: Sở hữu tư liệu sản xuất, tổ chức quản lý sản xuất, phương thức thu nhập của cải xã hội."
      },
      {
        "q_num": 15,
        "orig_id": 164,
        "title_raw": "Câu 15.[!b:$ Luận điểm “Xây dựng con người Việt Nam thời đại mới, gắn kết chặt chẽ, hài hòa giữa giá trị truyền thống và giá trị hiện đại... để con người Việt Nam thực sự là trung tâm của chiến lược phát triển, đồng thời là chủ thể phát triển” được nêu trong Đại hội Đảng lần thứ bao nhiêu?$]",
        "clean_text": "Luận điểm “Xây dựng con người Việt Nam thời đại mới, gắn kết chặt chẽ, hài hòa giữa giá trị truyền thống và giá trị hiện đại... để con người Việt Nam thực sự là trung tâm của chiến lược phát triển, đồng thời là chủ thể phát triển” được nêu trong Đại hội Đảng lần thứ bao nhiêu?",
        "options_raw": [
          "A. Lần thứ XI",
          "B. Lần thứ XII",
          "*C. Lần thứ XIII",
          "D. Lần thứ X"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lần thứ XI"
          },
          {
            "letter": "B",
            "text": "Lần thứ XII"
          },
          {
            "letter": "C",
            "text": "Lần thứ XIII"
          },
          {
            "letter": "D",
            "text": "Lần thứ X"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Lần thứ XIII"
      },
      {
        "q_num": 16,
        "orig_id": 197,
        "title_raw": "Câu 16.[!b:$ Luận điểm: “Thế giới không thoả mãn con người và con người quyết định biến đổi thế giới bằng hành động của mình” của ai?$]",
        "clean_text": "Luận điểm: “Thế giới không thoả mãn con người và con người quyết định biến đổi thế giới bằng hành động của mình” của ai?",
        "options_raw": [
          "A. Ph. Ăngghen",
          "*B. V.I.Lênin",
          "C. Hồ Chí Minh",
          "D. C.Mác"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Ph. Ăngghen"
          },
          {
            "letter": "B",
            "text": "V.I.Lênin"
          },
          {
            "letter": "C",
            "text": "Hồ Chí Minh"
          },
          {
            "letter": "D",
            "text": "C.Mác"
          }
        ],
        "correct_letter": "B",
        "correct_text": "V.I.Lênin"
      },
      {
        "q_num": 17,
        "orig_id": 97,
        "title_raw": "Câu 17.[!b:$ Trong hoạt động thực tiễn sai lầm của sự nóng vội là do không tôn trọng quy luật nào?$]",
        "clean_text": "Trong hoạt động thực tiễn sai lầm của sự nóng vội là do không tôn trọng quy luật nào?",
        "options_raw": [
          "A. Quy luật phủ định của phủ định",
          "*B. Quy luật lượng - chất",
          "C. Quy luật mâu thuẫn",
          "D. Cả 3 phương án trên"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật phủ định của phủ định"
          },
          {
            "letter": "B",
            "text": "Quy luật lượng - chất"
          },
          {
            "letter": "C",
            "text": "Quy luật mâu thuẫn"
          },
          {
            "letter": "D",
            "text": "Cả 3 phương án trên"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Quy luật lượng - chất"
      },
      {
        "q_num": 18,
        "orig_id": 92,
        "title_raw": "Câu 18.[!b:$ Yếu tố xét đến cùng chi phối sự vận động, phát triển của một giai cấp là:$]",
        "clean_text": "Yếu tố xét đến cùng chi phối sự vận động, phát triển của một giai cấp là:",
        "options_raw": [
          "*A. Lợi ích cơ bản",
          "B. Hệ tư tưởng",
          "C. Đường lối tổ chức",
          "D. Đường lối chính trị của giai cấp thống trị"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lợi ích cơ bản"
          },
          {
            "letter": "B",
            "text": "Hệ tư tưởng"
          },
          {
            "letter": "C",
            "text": "Đường lối tổ chức"
          },
          {
            "letter": "D",
            "text": "Đường lối chính trị của giai cấp thống trị"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Lợi ích cơ bản"
      },
      {
        "q_num": 19,
        "orig_id": 90,
        "title_raw": "Câu 19.[!b:$ Kết cấu giai cấp trong xã hội có giai cấp thường gồm:$]",
        "clean_text": "Kết cấu giai cấp trong xã hội có giai cấp thường gồm:",
        "options_raw": [
          "*A. Các giai cấp cơ bản, các giai cấp không cơ bản và tầng lớp trung gian",
          "B. Các giai cấp cơ bản và các giai cấp không cơ bản",
          "C. Các giai cấp đối kháng",
          "D. Các giai cấp cơ bản"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Các giai cấp cơ bản, các giai cấp không cơ bản và tầng lớp trung gian"
          },
          {
            "letter": "B",
            "text": "Các giai cấp cơ bản và các giai cấp không cơ bản"
          },
          {
            "letter": "C",
            "text": "Các giai cấp đối kháng"
          },
          {
            "letter": "D",
            "text": "Các giai cấp cơ bản"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Các giai cấp cơ bản, các giai cấp không cơ bản và tầng lớp trung gian"
      },
      {
        "q_num": 20,
        "orig_id": 65,
        "title_raw": "Câu 20.[!b:$ Chọn câu trả lời đúng theo quan điểm triết học Mác - Lênin:$]",
        "clean_text": "Chọn câu trả lời đúng theo quan điểm triết học Mác - Lênin:",
        "options_raw": [
          "*A. Sự phân chia cặp mối liên hệ bên trong- bên ngoài mang tính tương đối",
          "B. Sự phân chia từng cặp mối liên hệ chỉ mang tính chủ quan của con người",
          "C. Sự phân chia từng cặp mối liên hệ mang tính vừa tương đối, vừa tuyệt đối",
          "D. Sự phân chia từng cặp mối liên hệ mang tính tuyệt đối"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự phân chia cặp mối liên hệ bên trong- bên ngoài mang tính tương đối"
          },
          {
            "letter": "B",
            "text": "Sự phân chia từng cặp mối liên hệ chỉ mang tính chủ quan của con người"
          },
          {
            "letter": "C",
            "text": "Sự phân chia từng cặp mối liên hệ mang tính vừa tương đối, vừa tuyệt đối"
          },
          {
            "letter": "D",
            "text": "Sự phân chia từng cặp mối liên hệ mang tính tuyệt đối"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Sự phân chia cặp mối liên hệ bên trong- bên ngoài mang tính tương đối"
      },
      {
        "q_num": 21,
        "orig_id": 102,
        "title_raw": "Câu 21.[!b:$ Vì sao thời đại ngày nay khoa học trở thành lực lượng sản xuất trực tiếp:$]",
        "clean_text": "Vì sao thời đại ngày nay khoa học trở thành lực lượng sản xuất trực tiếp:",
        "options_raw": [
          "A. Lợi ích do khoa học mang lại ngày càng tăng",
          "*B. Khoa học thâm nhập vào các yếu tố cấu thành lực lượng sản xuất, đem lại sự thay đổi về chất của lực lượng sản xuất",
          "C. Không câu trả lời nào đúng",
          "D. Khoa học phát triển như vũ bão"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lợi ích do khoa học mang lại ngày càng tăng"
          },
          {
            "letter": "B",
            "text": "Khoa học thâm nhập vào các yếu tố cấu thành lực lượng sản xuất, đem lại sự thay đổi về chất của lực lượng sản xuất"
          },
          {
            "letter": "C",
            "text": "Không câu trả lời nào đúng"
          },
          {
            "letter": "D",
            "text": "Khoa học phát triển như vũ bão"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Khoa học thâm nhập vào các yếu tố cấu thành lực lượng sản xuất, đem lại sự thay đổi về chất của lực lượng sản xuất"
      },
      {
        "q_num": 22,
        "orig_id": 54,
        "title_raw": "Câu 22.[!b:$ Theo C.Mác, sợi dây xuyên suốt toàn bộ lịch sử nhân loại là:$]",
        "clean_text": "Theo C.Mác, sợi dây xuyên suốt toàn bộ lịch sử nhân loại là:",
        "options_raw": [
          "A. Đấu tranh giai cấp",
          "B. Lực lượng sản xuất.",
          "C. Quan hệ sản xuất.",
          "*D. Phương thức sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đấu tranh giai cấp"
          },
          {
            "letter": "B",
            "text": "Lực lượng sản xuất."
          },
          {
            "letter": "C",
            "text": "Quan hệ sản xuất."
          },
          {
            "letter": "D",
            "text": "Phương thức sản xuất"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Phương thức sản xuất"
      },
      {
        "q_num": 23,
        "orig_id": 81,
        "title_raw": "Câu 23.[!b:$ Con người mang tính lịch sử được hiểu theo nghĩa nào là đúng:$]",
        "clean_text": "Con người mang tính lịch sử được hiểu theo nghĩa nào là đúng:",
        "options_raw": [
          "A. Con người là chủ thể sáng tạo lịch sử",
          "B. Tất cả các phương án",
          "*C. Các thời đại lịch sử khác nhau thì có con người khác nhau",
          "D. Con người là sản phẩm của toàn bộ tiến trình lịch sử"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Con người là chủ thể sáng tạo lịch sử"
          },
          {
            "letter": "B",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "C",
            "text": "Các thời đại lịch sử khác nhau thì có con người khác nhau"
          },
          {
            "letter": "D",
            "text": "Con người là sản phẩm của toàn bộ tiến trình lịch sử"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Các thời đại lịch sử khác nhau thì có con người khác nhau"
      },
      {
        "q_num": 24,
        "orig_id": 174,
        "title_raw": "Câu 24.[!b:$ Điều kiện khách quan bỏ qua một hình thái kinh tế - xã hội là gì?$]",
        "clean_text": "Điều kiện khách quan bỏ qua một hình thái kinh tế - xã hội là gì?",
        "options_raw": [
          "A. Sự năng động sáng tạo của các nhà lãnh đạo xã hội",
          "*B. Yếu tố thời đại và nền tảng vật chất - kỹ thuật cho sự ra đời của hình thái kinh tế - xã hội mới",
          "C. Dựa vào sự giúp đỡ của nước ngoài",
          "D. Dựa vào sự phát triển của khoa học"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự năng động sáng tạo của các nhà lãnh đạo xã hội"
          },
          {
            "letter": "B",
            "text": "Yếu tố thời đại và nền tảng vật chất - kỹ thuật cho sự ra đời của hình thái kinh tế - xã hội mới"
          },
          {
            "letter": "C",
            "text": "Dựa vào sự giúp đỡ của nước ngoài"
          },
          {
            "letter": "D",
            "text": "Dựa vào sự phát triển của khoa học"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Yếu tố thời đại và nền tảng vật chất - kỹ thuật cho sự ra đời của hình thái kinh tế - xã hội mới"
      },
      {
        "q_num": 25,
        "orig_id": 187,
        "title_raw": "Câu 25.[!b:$ Cơ sở khoa học của quan điểm “xây dựng QĐND, Công an nhân dân cách mạng, chính quy, tinh nhuệ, từng bước hiện đại, một số quân chủng, binh chủng, lực lượng tiến thẳng lên hiện đại. Đến năm 2025 cơ bản xây dựng Quân đội, Công an tinh, gọn, mạnh tạo tiền đề vững chắc, phấn đấu năm 2030 xây dựng QĐND, CAND cách mạng, chính quy, hiện đại; vững mạnh về chính trị, tư tưởng, đạo đức tổ chức và cán bộ”:$]",
        "clean_text": "Cơ sở khoa học của quan điểm “xây dựng QĐND, Công an nhân dân cách mạng, chính quy, tinh nhuệ, từng bước hiện đại, một số quân chủng, binh chủng, lực lượng tiến thẳng lên hiện đại. Đến năm 2025 cơ bản xây dựng Quân đội, Công an tinh, gọn, mạnh tạo tiền đề vững chắc, phấn đấu năm 2030 xây dựng QĐND, CAND cách mạng, chính quy, hiện đại; vững mạnh về chính trị, tư tưởng, đạo đức tổ chức và cán bộ”:",
        "options_raw": [
          "A. Tất cả các phương án",
          "B. Quy luật mâu thuẫn",
          "C. Quy luật phủ định của phủ định",
          "*D. Quy luật lượng - chất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Quy luật mâu thuẫn"
          },
          {
            "letter": "C",
            "text": "Quy luật phủ định của phủ định"
          },
          {
            "letter": "D",
            "text": "Quy luật lượng - chất"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Quy luật lượng - chất"
      },
      {
        "q_num": 26,
        "orig_id": 3,
        "title_raw": "Câu 26.[!b:$ Cấu trúc của hình thái kinh tế - xã hội gồm các yếu tố nào hợp thành?$]",
        "clean_text": "Cấu trúc của hình thái kinh tế - xã hội gồm các yếu tố nào hợp thành?",
        "options_raw": [
          "A. Cơ sở hạ tầng và kiến trúc thượng tầng",
          "B. Quan hệ sản xuất, cơ sở hạ tầng và kiến trúc thượng tầng",
          "C. Lĩnh vực vật chất và lĩnh vực tinh thần",
          "*D. Quan hệ sản xuất, lực lượng sản xuất và kiến trúc thượng tầng."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cơ sở hạ tầng và kiến trúc thượng tầng"
          },
          {
            "letter": "B",
            "text": "Quan hệ sản xuất, cơ sở hạ tầng và kiến trúc thượng tầng"
          },
          {
            "letter": "C",
            "text": "Lĩnh vực vật chất và lĩnh vực tinh thần"
          },
          {
            "letter": "D",
            "text": "Quan hệ sản xuất, lực lượng sản xuất và kiến trúc thượng tầng."
          }
        ],
        "correct_letter": "D",
        "correct_text": "Quan hệ sản xuất, lực lượng sản xuất và kiến trúc thượng tầng."
      },
      {
        "q_num": 27,
        "orig_id": 116,
        "title_raw": "Câu 27.[!b:$ Quy luật phủ định của phủ định làm rõ vấn đề gì?$]",
        "clean_text": "Quy luật phủ định của phủ định làm rõ vấn đề gì?",
        "options_raw": [
          "A. Động lực của sự phát triển",
          "B. Cách thức của sự phát triển",
          "*C. Khuynh hướng của sự phát triển",
          "D. Nguồn gốc của sự phát triển"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Động lực của sự phát triển"
          },
          {
            "letter": "B",
            "text": "Cách thức của sự phát triển"
          },
          {
            "letter": "C",
            "text": "Khuynh hướng của sự phát triển"
          },
          {
            "letter": "D",
            "text": "Nguồn gốc của sự phát triển"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Khuynh hướng của sự phát triển"
      },
      {
        "q_num": 28,
        "orig_id": 26,
        "title_raw": "Câu 28.[!b:$ Các quan hệ cơ bản quy định địa vị của giai cấp là do:$]",
        "clean_text": "Các quan hệ cơ bản quy định địa vị của giai cấp là do:",
        "options_raw": [
          "*A. Pháp luật quy định và thừa nhận",
          "B. “Cha truyền, con nối”.",
          "C. Định mệnh",
          "D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Pháp luật quy định và thừa nhận"
          },
          {
            "letter": "B",
            "text": "“Cha truyền, con nối”."
          },
          {
            "letter": "C",
            "text": "Định mệnh"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Pháp luật quy định và thừa nhận"
      },
      {
        "q_num": 29,
        "orig_id": 74,
        "title_raw": "Câu 29.[!b:$ Theo quan điểm triết học Mác - Lênin, bản chất của ý thức là:$]",
        "clean_text": "Theo quan điểm triết học Mác - Lênin, bản chất của ý thức là:",
        "options_raw": [
          "*A. Là hình ảnh chủ quan của thế giới khách quan",
          "B. Hình ảnh phản ánh sự vận động và phát triển của thế giới khách quan",
          "C. Là một phần chức năng của bộ óc con người",
          "D. Hình ảnh của thế giới khách quan"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là hình ảnh chủ quan của thế giới khách quan"
          },
          {
            "letter": "B",
            "text": "Hình ảnh phản ánh sự vận động và phát triển của thế giới khách quan"
          },
          {
            "letter": "C",
            "text": "Là một phần chức năng của bộ óc con người"
          },
          {
            "letter": "D",
            "text": "Hình ảnh của thế giới khách quan"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Là hình ảnh chủ quan của thế giới khách quan"
      },
      {
        "q_num": 30,
        "orig_id": 29,
        "title_raw": "Câu 30.[!b:$ Đảng ta xác định động lực chủ yếu phát triển đất nước hiện nay là:$]",
        "clean_text": "Đảng ta xác định động lực chủ yếu phát triển đất nước hiện nay là:",
        "options_raw": [
          "A. Kinh tế thị trường định hướng xã hội chủ nghĩa.",
          "*B. Đại đoàn kết toàn dân tộc",
          "C. Liên minh giữa giai cấp công nhân với nông dân và đội ngũ trí thức do Đảng Cộng sản Việt Nam lãnh đạo.",
          "D. Khoa học - kỹ thuật."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Kinh tế thị trường định hướng xã hội chủ nghĩa."
          },
          {
            "letter": "B",
            "text": "Đại đoàn kết toàn dân tộc"
          },
          {
            "letter": "C",
            "text": "Liên minh giữa giai cấp công nhân với nông dân và đội ngũ trí thức do Đảng Cộng sản Việt Nam lãnh đạo."
          },
          {
            "letter": "D",
            "text": "Khoa học - kỹ thuật."
          }
        ],
        "correct_letter": "B",
        "correct_text": "Đại đoàn kết toàn dân tộc"
      }
    ]
  },
  {
    "test_num": 7,
    "title": "Đề trắc nghiệm số 7",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 43,
        "title_raw": "Câu 1.[!b:$ Tại sao lực lượng sản xuất quyết định đối với quan hệ sản xuất:$]",
        "clean_text": "Tại sao lực lượng sản xuất quyết định đối với quan hệ sản xuất:",
        "options_raw": [
          "A. Không có lực lực lượng sản xuất thì không có quan hệ sản xuất",
          "*B. Lực lượng sản xuất là nội dung, quan hệ sản xuất là hình thức xã hội của quá trình sản xuất. lực lượng sản xuất là yếu tố năng động, cách mạng, thường xuyên vận động, phát triển",
          "C. Lực lượng sản xuất có trước quan hệ sản xuất",
          "D. Không phương án nào đúng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Không có lực lực lượng sản xuất thì không có quan hệ sản xuất"
          },
          {
            "letter": "B",
            "text": "Lực lượng sản xuất là nội dung, quan hệ sản xuất là hình thức xã hội của quá trình sản xuất. lực lượng sản xuất là yếu tố năng động, cách mạng, thường xuyên vận động, phát triển"
          },
          {
            "letter": "C",
            "text": "Lực lượng sản xuất có trước quan hệ sản xuất"
          },
          {
            "letter": "D",
            "text": "Không phương án nào đúng"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Lực lượng sản xuất là nội dung, quan hệ sản xuất là hình thức xã hội của quá trình sản xuất. lực lượng sản xuất là yếu tố năng động, cách mạng, thường xuyên vận động, phát triển"
      },
      {
        "q_num": 2,
        "orig_id": 108,
        "title_raw": "Câu 2.[!b:$ Chế độ sở hữu chủ yếu của thời kỳ quá độ lên chủ nghĩa xã hội là:$]",
        "clean_text": "Chế độ sở hữu chủ yếu của thời kỳ quá độ lên chủ nghĩa xã hội là:",
        "options_raw": [
          "*A. Công hữu về tư liệu sản xuất",
          "B. Đa hình thức sở hữu",
          "C. Tư hữu về tư liệu sản xuất",
          "D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Công hữu về tư liệu sản xuất"
          },
          {
            "letter": "B",
            "text": "Đa hình thức sở hữu"
          },
          {
            "letter": "C",
            "text": "Tư hữu về tư liệu sản xuất"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Công hữu về tư liệu sản xuất"
      },
      {
        "q_num": 3,
        "orig_id": 98,
        "title_raw": "Câu 3.[!b:$ Đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là gì?$]",
        "clean_text": "Đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là gì?",
        "options_raw": [
          "*A. Từ một nền sản xuất nhỏ quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản",
          "B. Nhiều thành phần xã hội đan xen tồn tại",
          "C. Năng suất lao động thấp",
          "D. Lực lượng sản xuất chưa phát triển"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Từ một nền sản xuất nhỏ quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản"
          },
          {
            "letter": "B",
            "text": "Nhiều thành phần xã hội đan xen tồn tại"
          },
          {
            "letter": "C",
            "text": "Năng suất lao động thấp"
          },
          {
            "letter": "D",
            "text": "Lực lượng sản xuất chưa phát triển"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Từ một nền sản xuất nhỏ quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản"
      },
      {
        "q_num": 4,
        "orig_id": 161,
        "title_raw": "Câu 4.[!b:$ Ý thức xã hội tác động trở lại tồn tại xã hội là do:$]",
        "clean_text": "Ý thức xã hội tác động trở lại tồn tại xã hội là do:",
        "options_raw": [
          "A. Ý thức xã hội có mục đích riêng của nó",
          "*B. Ý thức xã hội nảy sinh từ tồn tại xã hội, thông qua hoạt động thực tiễn của con người.",
          "C. Ý thức xã hội độc lập hoàn toàn với tồn tại xã hội",
          "D. Ý thức xã hội do thần linh tạo ra"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Ý thức xã hội có mục đích riêng của nó"
          },
          {
            "letter": "B",
            "text": "Ý thức xã hội nảy sinh từ tồn tại xã hội, thông qua hoạt động thực tiễn của con người."
          },
          {
            "letter": "C",
            "text": "Ý thức xã hội độc lập hoàn toàn với tồn tại xã hội"
          },
          {
            "letter": "D",
            "text": "Ý thức xã hội do thần linh tạo ra"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Ý thức xã hội nảy sinh từ tồn tại xã hội, thông qua hoạt động thực tiễn của con người."
      },
      {
        "q_num": 5,
        "orig_id": 166,
        "title_raw": "Câu 5.[!b:$ Đấu tranh giai cấp ở đơn vị cơ sở hiện nay, biểu hiện:$]",
        "clean_text": "Đấu tranh giai cấp ở đơn vị cơ sở hiện nay, biểu hiện:",
        "options_raw": [
          "A. Đấu tranh chống tư tưởng bảo thủ lạc hậu",
          "B. Không ngừng nâng cao trình độ mội mặt cho cán bộ, chiến sĩ",
          "C. Thực hiện xây dựng chính quy, rèn luyện kỷ luật",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đấu tranh chống tư tưởng bảo thủ lạc hậu"
          },
          {
            "letter": "B",
            "text": "Không ngừng nâng cao trình độ mội mặt cho cán bộ, chiến sĩ"
          },
          {
            "letter": "C",
            "text": "Thực hiện xây dựng chính quy, rèn luyện kỷ luật"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 6,
        "orig_id": 110,
        "title_raw": "Câu 6.[!b:$ Trong quan hệ sản xuất, quan hệ nào giữ vai trò quyết định:$]",
        "clean_text": "Trong quan hệ sản xuất, quan hệ nào giữ vai trò quyết định:",
        "options_raw": [
          "A. Quan hệ tổ chức, quản lý sản xuất",
          "B. Tất cả các phương án",
          "*C. Quan hệ sở hữu tư liệu sản xuất",
          "D. Quan hệ phân phối sản phẩm"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan hệ tổ chức, quản lý sản xuất"
          },
          {
            "letter": "B",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "C",
            "text": "Quan hệ sở hữu tư liệu sản xuất"
          },
          {
            "letter": "D",
            "text": "Quan hệ phân phối sản phẩm"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Quan hệ sở hữu tư liệu sản xuất"
      },
      {
        "q_num": 7,
        "orig_id": 187,
        "title_raw": "Câu 7.[!b:$ Cơ sở khoa học của quan điểm “xây dựng QĐND, Công an nhân dân cách mạng, chính quy, tinh nhuệ, từng bước hiện đại, một số quân chủng, binh chủng, lực lượng tiến thẳng lên hiện đại. Đến năm 2025 cơ bản xây dựng Quân đội, Công an tinh, gọn, mạnh tạo tiền đề vững chắc, phấn đấu năm 2030 xây dựng QĐND, CAND cách mạng, chính quy, hiện đại; vững mạnh về chính trị, tư tưởng, đạo đức tổ chức và cán bộ”:$]",
        "clean_text": "Cơ sở khoa học của quan điểm “xây dựng QĐND, Công an nhân dân cách mạng, chính quy, tinh nhuệ, từng bước hiện đại, một số quân chủng, binh chủng, lực lượng tiến thẳng lên hiện đại. Đến năm 2025 cơ bản xây dựng Quân đội, Công an tinh, gọn, mạnh tạo tiền đề vững chắc, phấn đấu năm 2030 xây dựng QĐND, CAND cách mạng, chính quy, hiện đại; vững mạnh về chính trị, tư tưởng, đạo đức tổ chức và cán bộ”:",
        "options_raw": [
          "*A. Quy luật lượng - chất",
          "B. Tất cả các phương án",
          "C. Quy luật mâu thuẫn",
          "D. Quy luật phủ định của phủ định"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật lượng - chất"
          },
          {
            "letter": "B",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "C",
            "text": "Quy luật mâu thuẫn"
          },
          {
            "letter": "D",
            "text": "Quy luật phủ định của phủ định"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Quy luật lượng - chất"
      },
      {
        "q_num": 8,
        "orig_id": 16,
        "title_raw": "Câu 8.[!b:$ Cơ sở của liên minh công - nông trong cuộc đấu tranh giai cấp của giai cấp công nhân chống giai cấp tư sản là gì?$]",
        "clean_text": "Cơ sở của liên minh công - nông trong cuộc đấu tranh giai cấp của giai cấp công nhân chống giai cấp tư sản là gì?",
        "options_raw": [
          "A. Cùng địa vị",
          "B. Mang bản chất cách mạng",
          "*C. Thống nhất về lợi ích cơ bản",
          "D. Mục tiêu lý tưởng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cùng địa vị"
          },
          {
            "letter": "B",
            "text": "Mang bản chất cách mạng"
          },
          {
            "letter": "C",
            "text": "Thống nhất về lợi ích cơ bản"
          },
          {
            "letter": "D",
            "text": "Mục tiêu lý tưởng"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Thống nhất về lợi ích cơ bản"
      },
      {
        "q_num": 9,
        "orig_id": 160,
        "title_raw": "Câu 9.[!b:$ Theo nghĩa đen câu ca dao sau: &lt;br /&gt;“Một cây làm chẳng nên non &lt;br /&gt;Ba cây chụm lại nên hòn núi cao” &lt;br /&gt;Thể hiện nội dung quy luật nào của phép biện chứng duy vật nào?$]",
        "clean_text": "Theo nghĩa đen câu ca dao sau: <br />“Một cây làm chẳng nên non <br />Ba cây chụm lại nên hòn núi cao” <br />Thể hiện nội dung quy luật nào của phép biện chứng duy vật nào?",
        "options_raw": [
          "A. Quy luật mâu thuẫn",
          "B. Quy luật phủ định của phủ định",
          "*C. Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
          "D. Cả 3 đáp án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật mâu thuẫn"
          },
          {
            "letter": "B",
            "text": "Quy luật phủ định của phủ định"
          },
          {
            "letter": "C",
            "text": "Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại"
          },
          {
            "letter": "D",
            "text": "Cả 3 đáp án"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại"
      },
      {
        "q_num": 10,
        "orig_id": 147,
        "title_raw": "Câu 10.[!b:$ Lựa chọn phương án đúng: Xây dựng cán bộ Quân đội “7 dám”:$]",
        "clean_text": "Lựa chọn phương án đúng: Xây dựng cán bộ Quân đội “7 dám”:",
        "options_raw": [
          "A. Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì Tổ quốc",
          "B. Dám nghĩ, dám học hỏi, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung",
          "*C. Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung",
          "D. Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám cầu thị, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì Tổ quốc"
          },
          {
            "letter": "B",
            "text": "Dám nghĩ, dám học hỏi, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung"
          },
          {
            "letter": "C",
            "text": "Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung"
          },
          {
            "letter": "D",
            "text": "Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám cầu thị, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung"
      },
      {
        "q_num": 11,
        "orig_id": 60,
        "title_raw": "Câu 11.[!b:$ Chọn phương án trả lời chính xác nhất:$]",
        "clean_text": "Chọn phương án trả lời chính xác nhất:",
        "options_raw": [
          "A. Phương thức thực hiện các quy luật mâu thuẫn là thay đổi vị trí, vai trò của hai mặt đối lập",
          "B. Phương thức thực hiện các quy luật mâu thuẫn là mặt đối lập này đồng hoá mặt đối lập kia",
          "C. Phương thức thực hiện các quy luật mâu thuẫn là hai mặt đối lập cân bằng nhau",
          "*D. Phương thức thực hiện các quy luật mâu thuẫn là tích luỹ về lượng để thay đổi về chất toàn bộ sự vật"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phương thức thực hiện các quy luật mâu thuẫn là thay đổi vị trí, vai trò của hai mặt đối lập"
          },
          {
            "letter": "B",
            "text": "Phương thức thực hiện các quy luật mâu thuẫn là mặt đối lập này đồng hoá mặt đối lập kia"
          },
          {
            "letter": "C",
            "text": "Phương thức thực hiện các quy luật mâu thuẫn là hai mặt đối lập cân bằng nhau"
          },
          {
            "letter": "D",
            "text": "Phương thức thực hiện các quy luật mâu thuẫn là tích luỹ về lượng để thay đổi về chất toàn bộ sự vật"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Phương thức thực hiện các quy luật mâu thuẫn là tích luỹ về lượng để thay đổi về chất toàn bộ sự vật"
      },
      {
        "q_num": 12,
        "orig_id": 21,
        "title_raw": "Câu 12.[!b:$ Nguyên nhân trực tiếp của sự ra đời giai cấp trong xã hội:$]",
        "clean_text": "Nguyên nhân trực tiếp của sự ra đời giai cấp trong xã hội:",
        "options_raw": [
          "A. Do sự chênh lệch về khả năng giữa các tập đoàn người.",
          "*B. Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất",
          "C. Do sự phát triển lực lượng sản xuất làm xuất hiện “của dư” tương đối",
          "D. Do sự phân hoá giữa giàu và nghèo trong xã hội."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Do sự chênh lệch về khả năng giữa các tập đoàn người."
          },
          {
            "letter": "B",
            "text": "Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất"
          },
          {
            "letter": "C",
            "text": "Do sự phát triển lực lượng sản xuất làm xuất hiện “của dư” tương đối"
          },
          {
            "letter": "D",
            "text": "Do sự phân hoá giữa giàu và nghèo trong xã hội."
          }
        ],
        "correct_letter": "B",
        "correct_text": "Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất"
      },
      {
        "q_num": 13,
        "orig_id": 129,
        "title_raw": "Câu 13.[!b:$ Sự biến đổi về lượng của sự vật đạt đến mức độ nào mới làm cho chất của sự vật thay đổi:$]",
        "clean_text": "Sự biến đổi về lượng của sự vật đạt đến mức độ nào mới làm cho chất của sự vật thay đổi:",
        "options_raw": [
          "*A. Vượt giới hạn độ",
          "B. Không có sự biến đổi về chất",
          "C. Chưa tới giới hạn độ",
          "D. Trong giới hạn độ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Vượt giới hạn độ"
          },
          {
            "letter": "B",
            "text": "Không có sự biến đổi về chất"
          },
          {
            "letter": "C",
            "text": "Chưa tới giới hạn độ"
          },
          {
            "letter": "D",
            "text": "Trong giới hạn độ"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Vượt giới hạn độ"
      },
      {
        "q_num": 14,
        "orig_id": 34,
        "title_raw": "Câu 14.[!b:$ Ý nghĩa của phạm trù hình thái kinh tế - xã hội:$]",
        "clean_text": "Ý nghĩa của phạm trù hình thái kinh tế - xã hội:",
        "options_raw": [
          "*A. Đưa lại phương pháp luận xuất phát để nghiên cứu xã hội",
          "B. Đem lại sự hiểu biết toàn diện về mọi xã hội trong lịch sử.",
          "C. Đem lại một phương pháp tiếp cận xã hội mới.",
          "D. Đem lại sự hiểu biết đầy đủ về một xã hội cụ thể."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đưa lại phương pháp luận xuất phát để nghiên cứu xã hội"
          },
          {
            "letter": "B",
            "text": "Đem lại sự hiểu biết toàn diện về mọi xã hội trong lịch sử."
          },
          {
            "letter": "C",
            "text": "Đem lại một phương pháp tiếp cận xã hội mới."
          },
          {
            "letter": "D",
            "text": "Đem lại sự hiểu biết đầy đủ về một xã hội cụ thể."
          }
        ],
        "correct_letter": "A",
        "correct_text": "Đưa lại phương pháp luận xuất phát để nghiên cứu xã hội"
      },
      {
        "q_num": 15,
        "orig_id": 62,
        "title_raw": "Câu 15.[!b:$ Chọn phương án trả lời chính xác nhất:$]",
        "clean_text": "Chọn phương án trả lời chính xác nhất:",
        "options_raw": [
          "A. Chất của sự vật là tổng số các thuộc tính sự vật",
          "B. Chất của sự vật là cấu trúc sự vật",
          "C. Chất của sự vật là các thuộc tính sự vật",
          "*D. Chất của sự vật là sự thống nhất hữu cơ các thuộc tính"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chất của sự vật là tổng số các thuộc tính sự vật"
          },
          {
            "letter": "B",
            "text": "Chất của sự vật là cấu trúc sự vật"
          },
          {
            "letter": "C",
            "text": "Chất của sự vật là các thuộc tính sự vật"
          },
          {
            "letter": "D",
            "text": "Chất của sự vật là sự thống nhất hữu cơ các thuộc tính"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Chất của sự vật là sự thống nhất hữu cơ các thuộc tính"
      },
      {
        "q_num": 16,
        "orig_id": 158,
        "title_raw": "Câu 16.[!b:$ Trong các quan hệ sau, quan hệ nào giữ vai trò quyết định và chi phối các quan hệ khác:$]",
        "clean_text": "Trong các quan hệ sau, quan hệ nào giữ vai trò quyết định và chi phối các quan hệ khác:",
        "options_raw": [
          "A. Quan hệ giữa người với người trong đời sống xã hội",
          "B. Quan hệ chính trị, giai cấp",
          "*C. Quan hệ sản xuất",
          "D. Quan hệ kinh tế, pháp quyền"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan hệ giữa người với người trong đời sống xã hội"
          },
          {
            "letter": "B",
            "text": "Quan hệ chính trị, giai cấp"
          },
          {
            "letter": "C",
            "text": "Quan hệ sản xuất"
          },
          {
            "letter": "D",
            "text": "Quan hệ kinh tế, pháp quyền"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Quan hệ sản xuất"
      },
      {
        "q_num": 17,
        "orig_id": 154,
        "title_raw": "Câu 17.[!b:$ Hoàn thiện câu nói của C. Mác: “Trong mọi thời đại, những tư tưởng của ….. là những tư tưởng thống trị trong xã hội”?$]",
        "clean_text": "Hoàn thiện câu nói của C. Mác: “Trong mọi thời đại, những tư tưởng của ….. là những tư tưởng thống trị trong xã hội”?",
        "options_raw": [
          "*A. Giai cấp thống trị",
          "B. Nhà nước",
          "C. Giai cấp thống trị về kinh tế",
          "D. Giai cấp cầm quyền"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giai cấp thống trị"
          },
          {
            "letter": "B",
            "text": "Nhà nước"
          },
          {
            "letter": "C",
            "text": "Giai cấp thống trị về kinh tế"
          },
          {
            "letter": "D",
            "text": "Giai cấp cầm quyền"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Giai cấp thống trị"
      },
      {
        "q_num": 18,
        "orig_id": 1,
        "title_raw": "Câu 18.[!b:$ Bản chất của cách mạng khoa học kỹ thuật hiện đại là gì?$]",
        "clean_text": "Bản chất của cách mạng khoa học kỹ thuật hiện đại là gì?",
        "options_raw": [
          "A. Tạo ra nền kinh tế tri thức.",
          "B. Tạo ra bước nhảy vọt về chất trong quá trình sản xuất vật chất.",
          "*C. Cải biến về chất các lực lượng sản xuất hiện có trên cơ sở biến khoa học thành lực lượng sản xuất trực tiếp.",
          "D. Tạo ra năng suất lao động cao"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tạo ra nền kinh tế tri thức."
          },
          {
            "letter": "B",
            "text": "Tạo ra bước nhảy vọt về chất trong quá trình sản xuất vật chất."
          },
          {
            "letter": "C",
            "text": "Cải biến về chất các lực lượng sản xuất hiện có trên cơ sở biến khoa học thành lực lượng sản xuất trực tiếp."
          },
          {
            "letter": "D",
            "text": "Tạo ra năng suất lao động cao"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Cải biến về chất các lực lượng sản xuất hiện có trên cơ sở biến khoa học thành lực lượng sản xuất trực tiếp."
      },
      {
        "q_num": 19,
        "orig_id": 141,
        "title_raw": "Câu 19.[!b:$ Cái quy định hành vi lịch sử đầu tiên và cũng là động lực thúc đẩy con người hoạt động trong suốt lịch sử của mình là:$]",
        "clean_text": "Cái quy định hành vi lịch sử đầu tiên và cũng là động lực thúc đẩy con người hoạt động trong suốt lịch sử của mình là:",
        "options_raw": [
          "A. Lý tưởng sống",
          "B. Mục tiêu, lý tưởng",
          "C. Khát vọng quyền lực về kinh tế, chính trị.",
          "*D. Nhu cầu và lợi ích."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lý tưởng sống"
          },
          {
            "letter": "B",
            "text": "Mục tiêu, lý tưởng"
          },
          {
            "letter": "C",
            "text": "Khát vọng quyền lực về kinh tế, chính trị."
          },
          {
            "letter": "D",
            "text": "Nhu cầu và lợi ích."
          }
        ],
        "correct_letter": "D",
        "correct_text": "Nhu cầu và lợi ích."
      },
      {
        "q_num": 20,
        "orig_id": 27,
        "title_raw": "Câu 20.[!b:$ Cơ sở xác định các giai cấp theo quan điểm của triết học Mác - Lênin:$]",
        "clean_text": "Cơ sở xác định các giai cấp theo quan điểm của triết học Mác - Lênin:",
        "options_raw": [
          "A. Quan hệ sản xuất",
          "B. Lực lượng sản xuất.",
          "C. Cơ sở hạ tầng.",
          "*D. Phương thức sản xuất."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan hệ sản xuất"
          },
          {
            "letter": "B",
            "text": "Lực lượng sản xuất."
          },
          {
            "letter": "C",
            "text": "Cơ sở hạ tầng."
          },
          {
            "letter": "D",
            "text": "Phương thức sản xuất."
          }
        ],
        "correct_letter": "D",
        "correct_text": "Phương thức sản xuất."
      },
      {
        "q_num": 21,
        "orig_id": 143,
        "title_raw": "Câu 21.[!b:$ Chọn phương án đúng về xuất phát điểm C.Mác nghiên cứu con người:$]",
        "clean_text": "Chọn phương án đúng về xuất phát điểm C.Mác nghiên cứu con người:",
        "options_raw": [
          "A. Con người lịch sử xã hội",
          "*B. Con người thực tiễn gắn với sản xuất vật chất",
          "C. Tất cả các phương án",
          "D. Con người tôn giáo"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Con người lịch sử xã hội"
          },
          {
            "letter": "B",
            "text": "Con người thực tiễn gắn với sản xuất vật chất"
          },
          {
            "letter": "C",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "D",
            "text": "Con người tôn giáo"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Con người thực tiễn gắn với sản xuất vật chất"
      },
      {
        "q_num": 22,
        "orig_id": 103,
        "title_raw": "Câu 22.[!b:$ Cách viết nào sau đây là đúng:$]",
        "clean_text": "Cách viết nào sau đây là đúng:",
        "options_raw": [
          "*A. Hình thái kinh tế - xã hội",
          "B. Hình thái kinh tế của xã hội",
          "C. Hình thái kinh tế và xã hội",
          "D. Hình thái kinh tế, xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hình thái kinh tế - xã hội"
          },
          {
            "letter": "B",
            "text": "Hình thái kinh tế của xã hội"
          },
          {
            "letter": "C",
            "text": "Hình thái kinh tế và xã hội"
          },
          {
            "letter": "D",
            "text": "Hình thái kinh tế, xã hội"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Hình thái kinh tế - xã hội"
      },
      {
        "q_num": 23,
        "orig_id": 58,
        "title_raw": "Câu 23.[!b:$ Đấu tranh của các mặt đối lập là:$]",
        "clean_text": "Đấu tranh của các mặt đối lập là:",
        "options_raw": [
          "A. Vừa tương đối vừa tuyệt đối",
          "*B. Tuyệt đối",
          "C. Tương đối",
          "D. Các mặt đối lập chỉ có thống nhất với nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Vừa tương đối vừa tuyệt đối"
          },
          {
            "letter": "B",
            "text": "Tuyệt đối"
          },
          {
            "letter": "C",
            "text": "Tương đối"
          },
          {
            "letter": "D",
            "text": "Các mặt đối lập chỉ có thống nhất với nhau"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tuyệt đối"
      },
      {
        "q_num": 24,
        "orig_id": 126,
        "title_raw": "Câu 24.[!b:$ Mối liên hệ của các sự sự vật, hiện tượng là gì?$]",
        "clean_text": "Mối liên hệ của các sự sự vật, hiện tượng là gì?",
        "options_raw": [
          "A. Mối liên hệ của sự vật, hiện tượng là do ý thức của con người tạo ra",
          "*B. Là sự tác động, chuyển hoá một cách khách quan giữa các mặt, quá trình hoặc giữa các sự vật, hiện tượng với nhau",
          "C. Là sự tác động lẫn nhau, có tính khách quan nhưng không thể chuyển hoá cho nhau",
          "D. Là sự thừa nhận giữa các mặt hoặc giữa các sự vật không có mối liên hệ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mối liên hệ của sự vật, hiện tượng là do ý thức của con người tạo ra"
          },
          {
            "letter": "B",
            "text": "Là sự tác động, chuyển hoá một cách khách quan giữa các mặt, quá trình hoặc giữa các sự vật, hiện tượng với nhau"
          },
          {
            "letter": "C",
            "text": "Là sự tác động lẫn nhau, có tính khách quan nhưng không thể chuyển hoá cho nhau"
          },
          {
            "letter": "D",
            "text": "Là sự thừa nhận giữa các mặt hoặc giữa các sự vật không có mối liên hệ"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Là sự tác động, chuyển hoá một cách khách quan giữa các mặt, quá trình hoặc giữa các sự vật, hiện tượng với nhau"
      },
      {
        "q_num": 25,
        "orig_id": 132,
        "title_raw": "Câu 25.[!b:$ Cơ sở khoa học của mối quan hệ khách quan - chủ quan là gì?$]",
        "clean_text": "Cơ sở khoa học của mối quan hệ khách quan - chủ quan là gì?",
        "options_raw": [
          "A. Tồn tại xã hội và ý thức xã hội",
          "B. Tất cả các phương án",
          "C. Cơ sở hạ tầng và kiến trúc thượng tầng",
          "*D. Vật chất và ý thức"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tồn tại xã hội và ý thức xã hội"
          },
          {
            "letter": "B",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "C",
            "text": "Cơ sở hạ tầng và kiến trúc thượng tầng"
          },
          {
            "letter": "D",
            "text": "Vật chất và ý thức"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Vật chất và ý thức"
      },
      {
        "q_num": 26,
        "orig_id": 82,
        "title_raw": "Câu 26.[!b:$ Theo quan điểm của triết học Mác - Lênin, nguồn gốc quyết định hình thành con người:$]",
        "clean_text": "Theo quan điểm của triết học Mác - Lênin, nguồn gốc quyết định hình thành con người:",
        "options_raw": [
          "A. Nguồn gốc di truyền",
          "B. Nguồn gốc nhân chủng",
          "C. Nguồn gốc tự nhiên",
          "*D. Nguồn gốc xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguồn gốc di truyền"
          },
          {
            "letter": "B",
            "text": "Nguồn gốc nhân chủng"
          },
          {
            "letter": "C",
            "text": "Nguồn gốc tự nhiên"
          },
          {
            "letter": "D",
            "text": "Nguồn gốc xã hội"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Nguồn gốc xã hội"
      },
      {
        "q_num": 27,
        "orig_id": 113,
        "title_raw": "Câu 27.[!b:$ Yếu tố xét đến cùng quyết định sự vận động, phát triển của các hình thái kinh tế - xã hội:$]",
        "clean_text": "Yếu tố xét đến cùng quyết định sự vận động, phát triển của các hình thái kinh tế - xã hội:",
        "options_raw": [
          "A. Sự phát triển của con người",
          "*B. Sự phát triển của lực lượng sản xuất",
          "C. Sự lãnh đạo của các vĩ nhân",
          "D. Sự phát triển của quan hệ sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự phát triển của con người"
          },
          {
            "letter": "B",
            "text": "Sự phát triển của lực lượng sản xuất"
          },
          {
            "letter": "C",
            "text": "Sự lãnh đạo của các vĩ nhân"
          },
          {
            "letter": "D",
            "text": "Sự phát triển của quan hệ sản xuất"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Sự phát triển của lực lượng sản xuất"
      },
      {
        "q_num": 28,
        "orig_id": 151,
        "title_raw": "Câu 28.[!b:$ Điền từ thích hợp theo quan điểm đại hội XIII của Đảng: “Tăng cường bảo vệ nền tảng tư tưởng của Đảng, ………. đấu tranh phản các quan điểm sai trái, thù địch, cơ hội chính trị” ?$]",
        "clean_text": "Điền từ thích hợp theo quan điểm đại hội XIII của Đảng: “Tăng cường bảo vệ nền tảng tư tưởng của Đảng, ………. đấu tranh phản các quan điểm sai trái, thù địch, cơ hội chính trị” ?",
        "options_raw": [
          "A. Chủ động",
          "B. Kết hợp",
          "C. Nhiệm vụ trước mắt là",
          "*D. Kiên quyết và thường xuyên"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chủ động"
          },
          {
            "letter": "B",
            "text": "Kết hợp"
          },
          {
            "letter": "C",
            "text": "Nhiệm vụ trước mắt là"
          },
          {
            "letter": "D",
            "text": "Kiên quyết và thường xuyên"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Kiên quyết và thường xuyên"
      },
      {
        "q_num": 29,
        "orig_id": 87,
        "title_raw": "Câu 29.[!b:$ Nội dung chủ yếu của đấu tranh giai cấp ở nước ta trong giai đoạn hiện nay:$]",
        "clean_text": "Nội dung chủ yếu của đấu tranh giai cấp ở nước ta trong giai đoạn hiện nay:",
        "options_raw": [
          "A. Dung hòa mâu thuẫn giai cấp",
          "B. Thực hiện bình đẳng xã hội",
          "*C. Thực hiện thắng lợi sự nghiệp công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa.",
          "D. Xóa bỏ sự tồn tại giai cấp"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Dung hòa mâu thuẫn giai cấp"
          },
          {
            "letter": "B",
            "text": "Thực hiện bình đẳng xã hội"
          },
          {
            "letter": "C",
            "text": "Thực hiện thắng lợi sự nghiệp công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa."
          },
          {
            "letter": "D",
            "text": "Xóa bỏ sự tồn tại giai cấp"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Thực hiện thắng lợi sự nghiệp công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa."
      },
      {
        "q_num": 30,
        "orig_id": 31,
        "title_raw": "Câu 30.[!b:$ Bản chất của chế độ công hữu về tư liệu sản xuất là gì?$]",
        "clean_text": "Bản chất của chế độ công hữu về tư liệu sản xuất là gì?",
        "options_raw": [
          "*A. Là kiểu sở hữu công cộng về tư liệu sản xuất",
          "B. Là xã hội công dân",
          "C. Là xã hội cộng sản nguyên thủy",
          "D. Là hoàn toàn xóa bỏ sở hữu cá nhân"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là kiểu sở hữu công cộng về tư liệu sản xuất"
          },
          {
            "letter": "B",
            "text": "Là xã hội công dân"
          },
          {
            "letter": "C",
            "text": "Là xã hội cộng sản nguyên thủy"
          },
          {
            "letter": "D",
            "text": "Là hoàn toàn xóa bỏ sở hữu cá nhân"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Là kiểu sở hữu công cộng về tư liệu sản xuất"
      }
    ]
  }
];

const ORIGINAL_BANK = [
  {
    "orig_id": 1,
    "title_raw": "Câu 1.[!b:$ Bản chất của cách mạng khoa học kỹ thuật hiện đại là gì?$]",
    "clean_text": "Bản chất của cách mạng khoa học kỹ thuật hiện đại là gì?",
    "correct_text": "Cải biến về chất các lực lượng sản xuất hiện có trên cơ sở biến khoa học thành lực lượng sản xuất trực tiếp.",
    "distractors": [
      "Tạo ra bước nhảy vọt về chất trong quá trình sản xuất vật chất.",
      "Tạo ra nền kinh tế tri thức.",
      "Tạo ra năng suất lao động cao"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Cải biến về chất các lực lượng sản xuất hiện có trên cơ sở biến khoa học thành lực lượng sản xuất trực tiếp.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tạo ra bước nhảy vọt về chất trong quá trình sản xuất vật chất.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tạo ra nền kinh tế tri thức.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tạo ra năng suất lao động cao",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 18,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 2,
    "title_raw": "Câu 2.[!b:$ Tính đa dạng trong sự phát triển của lịch sử thể hiện ở chỗ?$]",
    "clean_text": "Tính đa dạng trong sự phát triển của lịch sử thể hiện ở chỗ?",
    "correct_text": "Một số quốc gia có thể bỏ qua một vài hình thái kinh tế - xã hội để tiến tới hình thái kinh tế -  xã hội cao hơn.",
    "distractors": [
      "Sự phát triển của lịch sử tuân theo quy luật khách quan",
      "Quá trình phát triển của các quốc gia là giống nhau",
      "Không có sự bỏ qua hình thái kinh tế - xã hội của các quốc gia"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Một số quốc gia có thể bỏ qua một vài hình thái kinh tế - xã hội để tiến tới hình thái kinh tế -  xã hội cao hơn.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Sự phát triển của lịch sử tuân theo quy luật khách quan",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quá trình phát triển của các quốc gia là giống nhau",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Không có sự bỏ qua hình thái kinh tế - xã hội của các quốc gia",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 6,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 3,
    "title_raw": "Câu 3.[!b:$ Cấu trúc của hình thái kinh tế - xã hội gồm các yếu tố nào hợp thành?$]",
    "clean_text": "Cấu trúc của hình thái kinh tế - xã hội gồm các yếu tố nào hợp thành?",
    "correct_text": "Quan hệ sản xuất, lực lượng sản xuất và kiến trúc thượng tầng.",
    "distractors": [
      "Lĩnh vực vật chất và lĩnh vực tinh thần",
      "Cơ sở hạ tầng và kiến trúc thượng tầng",
      "Quan hệ sản xuất, cơ sở hạ tầng và kiến trúc thượng tầng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan hệ sản xuất, lực lượng sản xuất và kiến trúc thượng tầng.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lĩnh vực vật chất và lĩnh vực tinh thần",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Cơ sở hạ tầng và kiến trúc thượng tầng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan hệ sản xuất, cơ sở hạ tầng và kiến trúc thượng tầng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 26,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 4,
    "title_raw": "Câu 4.[!b:$ Chọn phương án đúng về tính độc lập tương đối của ý thức xã hội:$]",
    "clean_text": "Chọn phương án đúng về tính độc lập tương đối của ý thức xã hội:",
    "correct_text": "Tất cả các phương án",
    "distractors": [
      "Tồn tại xã hội thay đổi nhưng có một số bộ phận của ý thức xã hội chưa thay đổi ngay cùng với tồn tại xã hội.",
      "Những tư tưởng khoa học tiên tiến có thể vượt trước sự phát triển của tồn tại xã hội nên",
      "Các hình thái ý thức xã hội trong sự phát triển có tác động qua lại lẫn nhau."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tồn tại xã hội thay đổi nhưng có một số bộ phận của ý thức xã hội chưa thay đổi ngay cùng với tồn tại xã hội.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Những tư tưởng khoa học tiên tiến có thể vượt trước sự phát triển của tồn tại xã hội nên",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Các hình thái ý thức xã hội trong sự phát triển có tác động qua lại lẫn nhau.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 12,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 5,
    "title_raw": "Câu 5.[!b:$ Lựa chọn phương án đúng về vai trò của tồn tại xã hội đối với ý thức xã hội:$]",
    "clean_text": "Lựa chọn phương án đúng về vai trò của tồn tại xã hội đối với ý thức xã hội:",
    "correct_text": "Ý thức xã hội là sự phản ánh tồn tại xã hội, phụ thuộc vào tồn tại xã hội.",
    "distractors": [
      "Tồn tại xã hội phụ thuộc vào ý thức xã hội",
      "Tồn tại xã hội có vai trò quyết định đối với các hình thái ý thức xã hội một cách đơn giản trực tiếp không qua các khâu trung gian.",
      "ý thức xã hội hoàn toàn phụ thuộc một cách thụ động vào tồn tại xã hội."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Ý thức xã hội là sự phản ánh tồn tại xã hội, phụ thuộc vào tồn tại xã hội.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tồn tại xã hội phụ thuộc vào ý thức xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tồn tại xã hội có vai trò quyết định đối với các hình thái ý thức xã hội một cách đơn giản trực tiếp không qua các khâu trung gian.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "ý thức xã hội hoàn toàn phụ thuộc một cách thụ động vào tồn tại xã hội.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 5,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 6,
    "title_raw": "Câu 6.[!b:$ Sự tác động trở lại của ý thức xã hội đối với tồn tại xã hội phụ thuộc vào các yếu tố nào?$]",
    "clean_text": "Sự tác động trở lại của ý thức xã hội đối với tồn tại xã hội phụ thuộc vào các yếu tố nào?",
    "correct_text": "Tất cả các phương án",
    "distractors": [
      "Mức độ phù hợp của tư tưởng với hiện thực",
      "Sự xâm nhập của ý thức vào quần chúng cả bề rộng lẫn bề sâu.",
      "Năng lực hiện thực hoá ý thức của các giai cấp và chính Đảng."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Mức độ phù hợp của tư tưởng với hiện thực",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Sự xâm nhập của ý thức vào quần chúng cả bề rộng lẫn bề sâu.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Năng lực hiện thực hoá ý thức của các giai cấp và chính Đảng.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 25,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 7,
    "title_raw": "Câu 7.[!b:$ Vai trò của ý thức cá nhân đối với ý thức xã hội:$]",
    "clean_text": "Vai trò của ý thức cá nhân đối với ý thức xã hội:",
    "correct_text": "Ý thức cá nhân là phương thức tồn tại và biểu hiện của ý thức xã hội",
    "distractors": [
      "Tổng số ý thức cá nhân bằng ý thức xã hội",
      "Ý thức cá nhân độc lập với ý thức xã hội",
      "Ý thức cá nhân quyết định ý thức xã hội"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Ý thức cá nhân là phương thức tồn tại và biểu hiện của ý thức xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tổng số ý thức cá nhân bằng ý thức xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Ý thức cá nhân độc lập với ý thức xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Ý thức cá nhân quyết định ý thức xã hội",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 3,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 8,
    "title_raw": "Câu 8.[!b:$ Tính lạc hậu của ý thức xã hội biểu hiện rõ nét nhất ở yếu tố nào?$]",
    "clean_text": "Tính lạc hậu của ý thức xã hội biểu hiện rõ nét nhất ở yếu tố nào?",
    "correct_text": "Tâm lý xã hội",
    "distractors": [
      "Tri thức, kinh nghiệm",
      "Hệ tư tưởng",
      "Quan điểm, tư tưởng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tâm lý xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tri thức, kinh nghiệm",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Hệ tư tưởng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan điểm, tư tưởng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 16,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 9,
    "title_raw": "Câu 9.[!b:$ Giải pháp phát huy nhân tố con người ở nước ta hiện nay là gì?$]",
    "clean_text": "Giải pháp phát huy nhân tố con người ở nước ta hiện nay là gì?",
    "correct_text": "Tất cả các phương án",
    "distractors": [
      "Quan tâm và giải quyết hài hoà lợi ích chính đáng của con người",
      "Đổi mới căn bản, toàn diện giáo dục và đào tạo, nâng cao chất lượng nguồn nhân lực, phát triển con người",
      "Thực hiện dân chủ hoá mọi mặt đời sống xã hội để phát huy nhân tố con người"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan tâm và giải quyết hài hoà lợi ích chính đáng của con người",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Đổi mới căn bản, toàn diện giáo dục và đào tạo, nâng cao chất lượng nguồn nhân lực, phát triển con người",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Thực hiện dân chủ hoá mọi mặt đời sống xã hội để phát huy nhân tố con người",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 7,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 10,
    "title_raw": "Câu 10.[!b:$ Chọn phương án đúng điền vào chỗ trống: “Trong tính hiện thực của nó, bản chất con người là …….. của các mối quan hệ xã hội”:$]",
    "clean_text": "Chọn phương án đúng điền vào chỗ trống: “Trong tính hiện thực của nó, bản chất con người là …….. của các mối quan hệ xã hội”:",
    "correct_text": "Tổng hòa",
    "distractors": [
      "Tổng thể",
      "Toàn bộ",
      "Tổng hợp"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tổng hòa",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tổng thể",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Toàn bộ",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tổng hợp",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 28,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 11,
    "title_raw": "Câu 11.[!b:$ Cống hiến quan trọng nhất của triết học Mác về bản chất con người:$]",
    "clean_text": "Cống hiến quan trọng nhất của triết học Mác về bản chất con người:",
    "correct_text": "Vạch ra vai trò của quan hệ xã hội trong việc hình thành bản chất con người.",
    "distractors": [
      "Vạch ra bản chất con người vừa là sản phẩm của hoàn cảnh, vừa là chủ thể của hoàn cảnh",
      "Vạch ra bản chất con người là chủ thể sáng tạo lịch sử.",
      "Vạch ra hai mặt cơ bản tạo thành bản chất con người là cái sinh vật và cái xã hội."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Vạch ra vai trò của quan hệ xã hội trong việc hình thành bản chất con người.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Vạch ra bản chất con người vừa là sản phẩm của hoàn cảnh, vừa là chủ thể của hoàn cảnh",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Vạch ra bản chất con người là chủ thể sáng tạo lịch sử.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Vạch ra hai mặt cơ bản tạo thành bản chất con người là cái sinh vật và cái xã hội.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 8,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 12,
    "title_raw": "Câu 12.[!b:$ Tồn tại xã hội là:$]",
    "clean_text": "Tồn tại xã hội là:",
    "correct_text": "Điều kiện sinh hoạt vật chất và quan hệ vật chất của xã hội",
    "distractors": [
      "Môi trường tự nhiên",
      "Môi trường xã hội",
      "Nền kinh tế"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Điều kiện sinh hoạt vật chất và quan hệ vật chất của xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Môi trường tự nhiên",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Môi trường xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nền kinh tế",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 2,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 13,
    "title_raw": "Câu 13.[!b:$ Chọn phương án đúng về động lực phát huy nhân tố con người ở Việt Nam hiện nay:$]",
    "clean_text": "Chọn phương án đúng về động lực phát huy nhân tố con người ở Việt Nam hiện nay:",
    "correct_text": "Tất cả các phương án",
    "distractors": [
      "Coi trọng phát triển giáo dục, đào tạo",
      "Dân chủ hoá mọi mặt đời sống xã hội",
      "Quan tâm đến lợi ích của con người"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Coi trọng phát triển giáo dục, đào tạo",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Dân chủ hoá mọi mặt đời sống xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan tâm đến lợi ích của con người",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 10,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 14,
    "title_raw": "Câu 14.[!b:$ Muốn nhận thức bản chất con người thì phải:$]",
    "clean_text": "Muốn nhận thức bản chất con người thì phải:",
    "correct_text": "Thông qua các quan hệ xã hội hiện thực của con người.",
    "distractors": [
      "Thông qua phẩm chất và năng lực của con người,",
      "Thông qua tồn tại xã hội của con người.",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Thông qua các quan hệ xã hội hiện thực của con người.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Thông qua phẩm chất và năng lực của con người,",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Thông qua tồn tại xã hội của con người.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 24,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 15,
    "title_raw": "Câu 15.[!b:$ Nguyên nhân xét đến cùng của những hành động chính trị trong xã hội:$]",
    "clean_text": "Nguyên nhân xét đến cùng của những hành động chính trị trong xã hội:",
    "correct_text": "Kinh tế",
    "distractors": [
      "Chính trị",
      "Tư tưởng",
      "Lợi ích"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Kinh tế",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Chính trị",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tư tưởng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Lợi ích",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 4,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 16,
    "title_raw": "Câu 16.[!b:$ Cơ sở của liên minh công - nông trong cuộc đấu tranh giai cấp của giai cấp công nhân chống giai cấp tư sản là gì?$]",
    "clean_text": "Cơ sở của liên minh công - nông trong cuộc đấu tranh giai cấp của giai cấp công nhân chống giai cấp tư sản là gì?",
    "correct_text": "Thống nhất về lợi ích cơ bản",
    "distractors": [
      "Mục tiêu lý tưởng",
      "Cùng địa vị",
      "Mang bản chất cách mạng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Thống nhất về lợi ích cơ bản",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Mục tiêu lý tưởng",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Cùng địa vị",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Mang bản chất cách mạng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 30,
        "correct_letter": "C"
      },
      {
        "test_num": 7,
        "q_num": 8,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 17,
    "title_raw": "Câu 17.[!b:$ Tiêu chí cơ bản để đánh giá giai cấp cách mạng:$]",
    "clean_text": "Tiêu chí cơ bản để đánh giá giai cấp cách mạng:",
    "correct_text": "Có khả năng giải phóng lực lượng sản xuất bị kìm hãm trong phương thức sản xuất cũ lạc hậu.",
    "distractors": [
      "Nghèo nhất trong xã hội.",
      "Bị thống trị bóc lột.",
      "Có tinh thần cách mạng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Có khả năng giải phóng lực lượng sản xuất bị kìm hãm trong phương thức sản xuất cũ lạc hậu.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nghèo nhất trong xã hội.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Bị thống trị bóc lột.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Có tinh thần cách mạng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 27,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 18,
    "title_raw": "Câu 18.[!b:$ Vai trò của đấu tranh giai cấp trong lịch sử nhân loại:$]",
    "clean_text": "Vai trò của đấu tranh giai cấp trong lịch sử nhân loại:",
    "correct_text": "Là động lực quan trọng, trực tiếp của lịch sử",
    "distractors": [
      "Là động lực cơ bản của sự phát triển xã hội.",
      "Thay thế các hình thái kinh tế - xã hội từ thấp đến cao.",
      "Lật đổ ách thống trị của giai cấp thống trị"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Là động lực quan trọng, trực tiếp của lịch sử",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Là động lực cơ bản của sự phát triển xã hội.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Thay thế các hình thái kinh tế - xã hội từ thấp đến cao.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Lật đổ ách thống trị của giai cấp thống trị",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 12,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 19,
    "title_raw": "Câu 19.[!b:$ Trong xã hội có giai cấp, ý thức xã hội mang tính giai cấp là do:$]",
    "clean_text": "Trong xã hội có giai cấp, ý thức xã hội mang tính giai cấp là do:",
    "correct_text": "Điều kiện sinh hoạt vật chất, địa vị và lợi ích của các giai cấp khác nhau",
    "distractors": [
      "Các giai cấp có quan niệm khác nhau về giá trị.",
      "Sự truyền bá tư tưởng của giai cấp thống trị.",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Điều kiện sinh hoạt vật chất, địa vị và lợi ích của các giai cấp khác nhau",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Các giai cấp có quan niệm khác nhau về giá trị.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Sự truyền bá tư tưởng của giai cấp thống trị.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 6,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 20,
    "title_raw": "Câu 20.[!b:$ Trong định nghĩa giai cấp của Lênin, địa vị của mỗi giai cấp được quy định ở những mối quan hệ cơ bản nào?$]",
    "clean_text": "Trong định nghĩa giai cấp của Lênin, địa vị của mỗi giai cấp được quy định ở những mối quan hệ cơ bản nào?",
    "correct_text": "Quan hệ về: Sở hữu tư liệu sản xuất, tổ chức quản lý sản xuất, phương thức thu nhập của cải xã hội.",
    "distractors": [
      "Quan hệ về thu nhập và quyền điều hành quản lý xã hội",
      "Quan hệ về dòng dõi, thành phần xuất thân",
      "Quan hệ về tư liệu sản xuất và vai trò trong tổ chức lao động xã hội, trong tổ chức quản lý sản xuất."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan hệ về: Sở hữu tư liệu sản xuất, tổ chức quản lý sản xuất, phương thức thu nhập của cải xã hội.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan hệ về thu nhập và quyền điều hành quản lý xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ về dòng dõi, thành phần xuất thân",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan hệ về tư liệu sản xuất và vai trò trong tổ chức lao động xã hội, trong tổ chức quản lý sản xuất.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 14,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 21,
    "title_raw": "Câu 21.[!b:$ Nguyên nhân trực tiếp của sự ra đời giai cấp trong xã hội:$]",
    "clean_text": "Nguyên nhân trực tiếp của sự ra đời giai cấp trong xã hội:",
    "correct_text": "Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất",
    "distractors": [
      "Do sự chênh lệch về khả năng giữa các tập đoàn người.",
      "Do sự phát triển lực lượng sản xuất làm xuất hiện “của dư” tương đối",
      "Do sự phân hoá giữa giàu và nghèo trong xã hội."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Do sự chênh lệch về khả năng giữa các tập đoàn người.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Do sự phát triển lực lượng sản xuất làm xuất hiện “của dư” tương đối",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Do sự phân hoá giữa giàu và nghèo trong xã hội.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 12,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 22,
    "title_raw": "Câu 22.[!b:$ Điều kiện thuận lợi cơ bản nhất của đấu tranh giai cấp của giai cấp vô sản trong thời kỳ quá độ:$]",
    "clean_text": "Điều kiện thuận lợi cơ bản nhất của đấu tranh giai cấp của giai cấp vô sản trong thời kỳ quá độ:",
    "correct_text": "Giai cấp vô sản đã giành được chính quyền",
    "distractors": [
      "Giai cấp thống trị phản động bị lật đổ",
      "Sự ủng hộ giúp đỡ của giai cấp vô sản quốc tế.",
      "Có sự lãnh đạo của Đảng cộng sản."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Giai cấp vô sản đã giành được chính quyền",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Giai cấp thống trị phản động bị lật đổ",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Sự ủng hộ giúp đỡ của giai cấp vô sản quốc tế.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Có sự lãnh đạo của Đảng cộng sản.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 23,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 23,
    "title_raw": "Câu 23.[!b:$ Nhận định nào sau đây đúng?$]",
    "clean_text": "Nhận định nào sau đây đúng?",
    "correct_text": "Lợi ích giai cấp và lợi ích dân tộc vừa thống nhất vừa mâu thuẫn",
    "distractors": [
      "Lợi ích giai cấp và lợi ích dân tộc luôn mâu thuẫn với nhau",
      "Lợi ích giai cấp và lợi ích dân tộc luôn thống nhất với nhau",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lợi ích giai cấp và lợi ích dân tộc vừa thống nhất vừa mâu thuẫn",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lợi ích giai cấp và lợi ích dân tộc luôn mâu thuẫn với nhau",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lợi ích giai cấp và lợi ích dân tộc luôn thống nhất với nhau",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 12,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 24,
    "title_raw": "Câu 24.[!b:$ Luận điểm sau của C.Mác: “Sự tồn tại của các giai cấp chỉ gắn liền với những giai đoạn phát triển lịch sử nhất định của sản xuất” được hiểu theo nghĩa:$]",
    "clean_text": "Luận điểm sau của C.Mác: “Sự tồn tại của các giai cấp chỉ gắn liền với những giai đoạn phát triển lịch sử nhất định của sản xuất” được hiểu theo nghĩa:",
    "correct_text": "Giai cấp chỉ là một phạm trù lịch sử, sự tồn tại giai cấp gắn liền với các giai đoạn phát triển nhất định của sản xuất",
    "distractors": [
      "Giai cấp chỉ là hiện tượng lịch sử",
      "Sự tồn tại của giai cấp gắn liền với lịch sử của sản xuất",
      "Giai cấp tồn tại vĩnh viễn"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Giai cấp chỉ là một phạm trù lịch sử, sự tồn tại giai cấp gắn liền với các giai đoạn phát triển nhất định của sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Giai cấp chỉ là hiện tượng lịch sử",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Sự tồn tại của giai cấp gắn liền với lịch sử của sản xuất",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Giai cấp tồn tại vĩnh viễn",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 28,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 25,
    "title_raw": "Câu 25.[!b:$ Các hình thức của quan hệ giai cấp trong xã hội có giai cấp:$]",
    "clean_text": "Các hình thức của quan hệ giai cấp trong xã hội có giai cấp:",
    "correct_text": "Liên minh giai cấp và đấu tranh giai cấp",
    "distractors": [
      "Liên minh giai cấp.",
      "Kết hợp giai cấp.",
      "Đấu tranh giai cấp."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Liên minh giai cấp và đấu tranh giai cấp",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Liên minh giai cấp.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Kết hợp giai cấp.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Đấu tranh giai cấp.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 14,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 26,
    "title_raw": "Câu 26.[!b:$ Các quan hệ cơ bản quy định địa vị của giai cấp là do:$]",
    "clean_text": "Các quan hệ cơ bản quy định địa vị của giai cấp là do:",
    "correct_text": "Pháp luật quy định và thừa nhận",
    "distractors": [
      "“Cha truyền, con nối”.",
      "Định mệnh",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Pháp luật quy định và thừa nhận",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "“Cha truyền, con nối”.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Định mệnh",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 28,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 27,
    "title_raw": "Câu 27.[!b:$ Cơ sở xác định các giai cấp theo quan điểm của triết học Mác - Lênin:$]",
    "clean_text": "Cơ sở xác định các giai cấp theo quan điểm của triết học Mác - Lênin:",
    "correct_text": "Phương thức sản xuất.",
    "distractors": [
      "Lực lượng sản xuất.",
      "Quan hệ sản xuất",
      "Cơ sở hạ tầng."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Phương thức sản xuất.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lực lượng sản xuất.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ sản xuất",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Cơ sở hạ tầng.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 20,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 28,
    "title_raw": "Câu 28.[!b:$ Công lao phát hiện vấn đề giai cấp và đấu tranh giai cấp gắn với tên tuổi của:$]",
    "clean_text": "Công lao phát hiện vấn đề giai cấp và đấu tranh giai cấp gắn với tên tuổi của:",
    "correct_text": "Các nhà sử học Pháp.",
    "distractors": [
      "C. Mác và Ph. Ăng ghen.",
      "Các nhà kinh tế chính trị học Anh.",
      "Các nhà tư tưởng tư sản"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Các nhà sử học Pháp.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "C. Mác và Ph. Ăng ghen.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Các nhà kinh tế chính trị học Anh.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Các nhà tư tưởng tư sản",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 3,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 29,
    "title_raw": "Câu 29.[!b:$ Đảng ta xác định động lực chủ yếu phát triển đất nước hiện nay là:$]",
    "clean_text": "Đảng ta xác định động lực chủ yếu phát triển đất nước hiện nay là:",
    "correct_text": "Đại đoàn kết toàn dân tộc",
    "distractors": [
      "Khoa học - kỹ thuật.",
      "Kinh tế thị trường định hướng xã hội chủ nghĩa.",
      "Liên minh giữa giai cấp công nhân với nông dân và đội ngũ trí thức do Đảng Cộng sản Việt Nam lãnh đạo."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Đại đoàn kết toàn dân tộc",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Khoa học - kỹ thuật.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Kinh tế thị trường định hướng xã hội chủ nghĩa.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Liên minh giữa giai cấp công nhân với nông dân và đội ngũ trí thức do Đảng Cộng sản Việt Nam lãnh đạo.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 30,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 30,
    "title_raw": "Câu 30.[!b:$ Tính chất đối kháng của kiến trúc thượng tầng xuất hiện do đâu?$]",
    "clean_text": "Tính chất đối kháng của kiến trúc thượng tầng xuất hiện do đâu?",
    "correct_text": "Tính đối kháng trong cơ sở hạ tầng sinh ra nó",
    "distractors": [
      "Giai cấp thống trị xã hội",
      "Ý chí của lực lượng siêu nhiên",
      "Do mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tính đối kháng trong cơ sở hạ tầng sinh ra nó",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Giai cấp thống trị xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Ý chí của lực lượng siêu nhiên",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Do mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 24,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 31,
    "title_raw": "Câu 31.[!b:$ Bản chất của chế độ công hữu về tư liệu sản xuất là gì?$]",
    "clean_text": "Bản chất của chế độ công hữu về tư liệu sản xuất là gì?",
    "correct_text": "Là kiểu sở hữu công cộng về tư liệu sản xuất",
    "distractors": [
      "Là xã hội cộng sản nguyên thủy",
      "Là xã hội công dân",
      "Là hoàn toàn xóa bỏ sở hữu cá nhân"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Là kiểu sở hữu công cộng về tư liệu sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Là xã hội cộng sản nguyên thủy",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Là xã hội công dân",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Là hoàn toàn xóa bỏ sở hữu cá nhân",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 30,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 32,
    "title_raw": "Câu 32.[!b:$ Để xây dựng chế độ công hữu theo quan điểm duy vật biện chứng phải làm gì?$]",
    "clean_text": "Để xây dựng chế độ công hữu theo quan điểm duy vật biện chứng phải làm gì?",
    "correct_text": "Thiết lập sự thống nhất giữa sở hữu xã hội với sở hữu cá nhân về tư liệu sản xuất",
    "distractors": [
      "Xoá bỏ chế độ tư hữu nói chung",
      "Xoá bỏ chế độ tư hữu và sở hữu cá nhân nói chung",
      "Thiết lập sở hữu toàn dân và hoàn toàn xóa bỏ sở hữu cá nhân"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Thiết lập sự thống nhất giữa sở hữu xã hội với sở hữu cá nhân về tư liệu sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Xoá bỏ chế độ tư hữu nói chung",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Xoá bỏ chế độ tư hữu và sở hữu cá nhân nói chung",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Thiết lập sở hữu toàn dân và hoàn toàn xóa bỏ sở hữu cá nhân",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 6,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 33,
    "title_raw": "Câu 33.[!b:$ Trong sự nghiệp xây dựng chủ nghĩa xã hội ở nước ta, chúng ta phải:$]",
    "clean_text": "Trong sự nghiệp xây dựng chủ nghĩa xã hội ở nước ta, chúng ta phải:",
    "correct_text": "Kết hợp đồng thời xây dựng lực lượng sản xuất với xác lập quan hệ sản xuất phù hợp.",
    "distractors": [
      "Chủ động xây dựng quan hệ sản xuất trước, sau đó xây dựng lực lượng sản xuất phù hợp.",
      "Chủ động xây dựng lực lượng sản xuất trước, sau đó xây dựng quan hệ sản xuất phù hợp.",
      "Xây dựng cho phù hợp theo từng thời kỳ"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Kết hợp đồng thời xây dựng lực lượng sản xuất với xác lập quan hệ sản xuất phù hợp.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Chủ động xây dựng quan hệ sản xuất trước, sau đó xây dựng lực lượng sản xuất phù hợp.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Chủ động xây dựng lực lượng sản xuất trước, sau đó xây dựng quan hệ sản xuất phù hợp.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Xây dựng cho phù hợp theo từng thời kỳ",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 22,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 34,
    "title_raw": "Câu 34.[!b:$ Ý nghĩa của phạm trù hình thái kinh tế - xã hội:$]",
    "clean_text": "Ý nghĩa của phạm trù hình thái kinh tế - xã hội:",
    "correct_text": "Đưa lại phương pháp luận xuất phát để nghiên cứu xã hội",
    "distractors": [
      "Đem lại sự hiểu biết toàn diện về mọi xã hội trong lịch sử.",
      "Đem lại sự hiểu biết đầy đủ về một xã hội cụ thể.",
      "Đem lại một phương pháp tiếp cận xã hội mới."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Đưa lại phương pháp luận xuất phát để nghiên cứu xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Đem lại sự hiểu biết toàn diện về mọi xã hội trong lịch sử.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Đem lại sự hiểu biết đầy đủ về một xã hội cụ thể.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Đem lại một phương pháp tiếp cận xã hội mới.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 11,
        "correct_letter": "C"
      },
      {
        "test_num": 7,
        "q_num": 14,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 35,
    "title_raw": "Câu 35.[!b:$ Tiêu chuẩn khách quan để phân biệt các hình thái kinh tế - xã hội:$]",
    "clean_text": "Tiêu chuẩn khách quan để phân biệt các hình thái kinh tế - xã hội:",
    "correct_text": "Quan hệ sản xuất",
    "distractors": [
      "Lực lượng sản xuất",
      "Chính trị, tư tưởng",
      "Bộ máy nhà nước"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan hệ sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lực lượng sản xuất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Chính trị, tư tưởng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Bộ máy nhà nước",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 7,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 36,
    "title_raw": "Câu 36.[!b:$ Kiến trúc thượng tầng tác động tới cơ sở hạ tầng theo chiều hướng nào?$]",
    "clean_text": "Kiến trúc thượng tầng tác động tới cơ sở hạ tầng theo chiều hướng nào?",
    "correct_text": "Cả tích cực và tiêu cực",
    "distractors": [
      "Tích cực",
      "Tiêu cực",
      "Không tác động"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Cả tích cực và tiêu cực",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tích cực",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tiêu cực",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Không tác động",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 13,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 37,
    "title_raw": "Câu 37.[!b:$ Tính chất xã hội hoá cao của lực lượng sản xuất được bắt đầu từ xã hội nào?$]",
    "clean_text": "Tính chất xã hội hoá cao của lực lượng sản xuất được bắt đầu từ xã hội nào?",
    "correct_text": "Xã hội tư bản chủ nghĩa",
    "distractors": [
      "Xã hội xã hội chủ nghĩa",
      "Xã hội phong kiến",
      "Xã hội chiếm hữu nô lệ."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Xã hội tư bản chủ nghĩa",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Xã hội xã hội chủ nghĩa",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Xã hội phong kiến",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Xã hội chiếm hữu nô lệ.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 6,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 38,
    "title_raw": "Câu 38.[!b:$ Cơ sở lý luận nền tảng của đường lối xây dựng chủ nghĩa xã hội của Đảng ta là:$]",
    "clean_text": "Cơ sở lý luận nền tảng của đường lối xây dựng chủ nghĩa xã hội của Đảng ta là:",
    "correct_text": "Học thuyết về hình thái kinh tế - xã hội",
    "distractors": [
      "Phép biện chứng duy vật",
      "Học thuyết về giai cấp và đấu tranh giai cấp của triết học Mác-Lênin",
      "Học thuyết về con người"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Học thuyết về hình thái kinh tế - xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Phép biện chứng duy vật",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Học thuyết về giai cấp và đấu tranh giai cấp của triết học Mác-Lênin",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Học thuyết về con người",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 8,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 39,
    "title_raw": "Câu 39.[!b:$ Quan hệ vật chất và quan hệ tinh thần của xã hội được khái quát trong phạm trù nào?$]",
    "clean_text": "Quan hệ vật chất và quan hệ tinh thần của xã hội được khái quát trong phạm trù nào?",
    "correct_text": "Cơ sở hạ tầng, kiến trúc thượng tầng của xã hội",
    "distractors": [
      "Quan hệ đạo đức, tôn giáo",
      "Quan hệ sản xuất, quan hệ chính trị",
      "Quan hệ kinh tế và quan hệ chính trị"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Cơ sở hạ tầng, kiến trúc thượng tầng của xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan hệ đạo đức, tôn giáo",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ sản xuất, quan hệ chính trị",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan hệ kinh tế và quan hệ chính trị",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 26,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 40,
    "title_raw": "Câu 40.[!b:$ Luận điểm: “Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên” của C.Mác nói về:$]",
    "clean_text": "Luận điểm: “Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên” của C.Mác nói về:",
    "correct_text": "Sự phát triển của xã hội có tính quy luật",
    "distractors": [
      "Sự phát triển của xã hội có tính ngẫu nhiên",
      "Sự phát triển của xã hội phụ thuộc ý muốn của con người",
      "Sự phát triển của xã hội không tuân theo quy luật nào"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Sự phát triển của xã hội có tính quy luật",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Sự phát triển của xã hội có tính ngẫu nhiên",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Sự phát triển của xã hội phụ thuộc ý muốn của con người",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Sự phát triển của xã hội không tuân theo quy luật nào",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 18,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 41,
    "title_raw": "Câu 41.[!b:$ Chủ trương thực hiện nhất quán đa hình thức sở hữu ở nước ta hiện nay là:$]",
    "clean_text": "Chủ trương thực hiện nhất quán đa hình thức sở hữu ở nước ta hiện nay là:",
    "correct_text": "Sự vận dụng đúng đắn quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất, đáp ứng hội nhập kinh tế quốc tế",
    "distractors": [
      "Nhằm xây dựng kiến trúc thượng tầng xã hội",
      "Nhằm phát triển quan hệ sản xuất.",
      "Sự vận dụng đúng đắn quy luật về mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Sự vận dụng đúng đắn quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất, đáp ứng hội nhập kinh tế quốc tế",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nhằm xây dựng kiến trúc thượng tầng xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nhằm phát triển quan hệ sản xuất.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Sự vận dụng đúng đắn quy luật về mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 17,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 42,
    "title_raw": "Câu 42.[!b:$ Kiến trúc thượng tầng của xã hội bao gồm:$]",
    "clean_text": "Kiến trúc thượng tầng của xã hội bao gồm:",
    "correct_text": "Toàn bộ quan điểm về chính trị, pháp quyền,…và những thiết chế xã hội tương ứng như nhà nước, đảng phái,… được hình thành trên cơ sở hạ tầng nhất định.",
    "distractors": [
      "Toàn bộ các quan hệ xã hội",
      "Toàn bộ các tư tưởng xã hội và các tổ chức tương ứng.",
      "Toàn bộ ý thức xã hội."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Toàn bộ quan điểm về chính trị, pháp quyền,…và những thiết chế xã hội tương ứng như nhà nước, đảng phái,… được hình thành trên cơ sở hạ tầng nhất định.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Toàn bộ các quan hệ xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Toàn bộ các tư tưởng xã hội và các tổ chức tương ứng.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Toàn bộ ý thức xã hội.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 5,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 43,
    "title_raw": "Câu 43.[!b:$ Tại sao lực lượng sản xuất quyết định đối với quan hệ sản xuất:$]",
    "clean_text": "Tại sao lực lượng sản xuất quyết định đối với quan hệ sản xuất:",
    "correct_text": "Lực lượng sản xuất là nội dung, quan hệ sản xuất là hình thức xã hội của quá trình sản xuất. lực lượng sản xuất là yếu tố năng động, cách mạng, thường xuyên vận động, phát triển",
    "distractors": [
      "Lực lượng sản xuất có trước quan hệ sản xuất",
      "Không có lực lực lượng sản xuất thì không có quan hệ sản xuất",
      "Không phương án nào đúng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lực lượng sản xuất là nội dung, quan hệ sản xuất là hình thức xã hội của quá trình sản xuất. lực lượng sản xuất là yếu tố năng động, cách mạng, thường xuyên vận động, phát triển",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lực lượng sản xuất có trước quan hệ sản xuất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Không có lực lực lượng sản xuất thì không có quan hệ sản xuất",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Không phương án nào đúng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 2,
        "correct_letter": "A"
      },
      {
        "test_num": 7,
        "q_num": 1,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 44,
    "title_raw": "Câu 44.[!b:$ Quan hệ sản xuất bao gồm:$]",
    "clean_text": "Quan hệ sản xuất bao gồm:",
    "correct_text": "Các quan hệ giữa người với người trong quá trình sản xuất.",
    "distractors": [
      "Quan hệ giữa con người với tự nhiên và con người với con người.",
      "Quan hệ giữa con người với con người trong quá trình sản xuất, lưu thông, tiêu dùng hàng hoá.",
      "Quan hệ giữa người với người trong đời sống xã hội."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Các quan hệ giữa người với người trong quá trình sản xuất.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan hệ giữa con người với tự nhiên và con người với con người.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ giữa con người với con người trong quá trình sản xuất, lưu thông, tiêu dùng hàng hoá.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan hệ giữa người với người trong đời sống xã hội.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 25,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 45,
    "title_raw": "Câu 45.[!b:$ Các phạm trù nào sau đây thuộc lĩnh vực chính trị của đời sống xã hội:$]",
    "clean_text": "Các phạm trù nào sau đây thuộc lĩnh vực chính trị của đời sống xã hội:",
    "correct_text": "Giai cấp, đấu tranh giai cấp, cách mạng xã hội, nhà nước",
    "distractors": [
      "Đạo đức, nghệ thuật, tôn giáo, triết học",
      "Quan hệ xã hội, quan hệ sản xuất, quan hệ thẩm mỹ",
      "Quan hệ kinh tế"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Giai cấp, đấu tranh giai cấp, cách mạng xã hội, nhà nước",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Đạo đức, nghệ thuật, tôn giáo, triết học",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ xã hội, quan hệ sản xuất, quan hệ thẩm mỹ",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan hệ kinh tế",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 28,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 46,
    "title_raw": "Câu 46.[!b:$ Đặc trưng cơ sở hạ tầng của một xã hội là gì?$]",
    "clean_text": "Đặc trưng cơ sở hạ tầng của một xã hội là gì?",
    "correct_text": "Quan hệ sản xuất thống trị",
    "distractors": [
      "Quan hệ sản xuất tàn dư",
      "Quan hệ sản xuất mầm mống",
      "Tất cả các quan hệ sản xuất trên"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan hệ sản xuất thống trị",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan hệ sản xuất tàn dư",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ sản xuất mầm mống",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các quan hệ sản xuất trên",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 6,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 47,
    "title_raw": "Câu 47.[!b:$ Luận điểm: “Thực tiễn không có lý luận hướng dẫn thì thành thực tiễn mù quáng. Lý luận mà không liên hệ với thực tiễn là lý luận suông” của tác giả nào?$]",
    "clean_text": "Luận điểm: “Thực tiễn không có lý luận hướng dẫn thì thành thực tiễn mù quáng. Lý luận mà không liên hệ với thực tiễn là lý luận suông” của tác giả nào?",
    "correct_text": "Hồ Chí Minh",
    "distractors": [
      "V.I.Lênin",
      "C.Mác",
      "Ph. Ăngghen"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Hồ Chí Minh",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "V.I.Lênin",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "C.Mác",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Ph. Ăngghen",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 28,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 48,
    "title_raw": "Câu 48.[!b:$ Chọn phương án đúng về bản chất của nhận thức:$]",
    "clean_text": "Chọn phương án đúng về bản chất của nhận thức:",
    "correct_text": "Nhận thức trên cơ sở hoạt động thực tiễn của con người",
    "distractors": [
      "Nhận thức tùy vào năng lực bản thân",
      "Nhận thức dựa vào tính phong phú của hiện thực khách quan",
      "Nhận thức là sự nỗ lực của từng cá nhân"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nhận thức trên cơ sở hoạt động thực tiễn của con người",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nhận thức tùy vào năng lực bản thân",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nhận thức dựa vào tính phong phú của hiện thực khách quan",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nhận thức là sự nỗ lực của từng cá nhân",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 4,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 49,
    "title_raw": "Câu 49.[!b:$ Nghệ thuật quân sự Việt Nam thuộc lĩnh vực nào sau đây?$]",
    "clean_text": "Nghệ thuật quân sự Việt Nam thuộc lĩnh vực nào sau đây?",
    "correct_text": "Lý luận quân sự",
    "distractors": [
      "Thực tiễn quân sự",
      "Hành động quân sự",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lý luận quân sự",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Thực tiễn quân sự",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Hành động quân sự",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 15,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 50,
    "title_raw": "Câu 50.[!b:$ Xác định quan niệm sai về phủ định biện chứng:$]",
    "clean_text": "Xác định quan niệm sai về phủ định biện chứng:",
    "correct_text": "Phủ định là chấm dứt sự phát triển",
    "distractors": [
      "Phủ định có tính kế thừa",
      "Phủ định đồng thời cũng là khẳng định",
      "Phủ định có tính khách quan, phổ biến"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Phủ định là chấm dứt sự phát triển",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Phủ định có tính kế thừa",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Phủ định đồng thời cũng là khẳng định",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Phủ định có tính khách quan, phổ biến",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 22,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 51,
    "title_raw": "Câu 51.[!b:$ Quan điểm “dĩ hòa vi quý” vi phạm lý luận nào?$]",
    "clean_text": "Quan điểm “dĩ hòa vi quý” vi phạm lý luận nào?",
    "correct_text": "Quy luật mâu thuẫn",
    "distractors": [
      "Quy luật phủ định của phủ định",
      "Nguyên lý về sự phát triển",
      "Nguyên lý về mối liên hệ phổ biến"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quy luật mâu thuẫn",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quy luật phủ định của phủ định",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguyên lý về sự phát triển",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nguyên lý về mối liên hệ phổ biến",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 13,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 52,
    "title_raw": "Câu 52.[!b:$ Theo C.Mác và Ph.Ăngghen, quá trình thay thế các hình thức sở hữu tư liệu sản xuất phụ thuộc trực tiếp vào?$]",
    "clean_text": "Theo C.Mác và Ph.Ăngghen, quá trình thay thế các hình thức sở hữu tư liệu sản xuất phụ thuộc trực tiếp vào?",
    "correct_text": "Trình độ phân công lao động xã hội",
    "distractors": [
      "Trình độ phát triển của lực lượng sản xuất",
      "Trình độ kỹ thuật sản xuất",
      "Trình độ của công cụ sản xuất"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Trình độ phân công lao động xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Trình độ phát triển của lực lượng sản xuất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Trình độ kỹ thuật sản xuất",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Trình độ của công cụ sản xuất",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 20,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 53,
    "title_raw": "Câu 53.[!b:$ Nội dung của quá trình sản xuất vật chất là gì?$]",
    "clean_text": "Nội dung của quá trình sản xuất vật chất là gì?",
    "correct_text": "Tư liệu sản xuất và người lao động với kỹ năng lao động tương ứng với công cụ lao động",
    "distractors": [
      "Tư liệu sản xuất và con người",
      "Tư liệu sản xuất và quan hệ giữa người với người đối với tư liệu sản xuất",
      "Tư liệu sản xuất và tổ chức, quản lý sản xuất"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tư liệu sản xuất và người lao động với kỹ năng lao động tương ứng với công cụ lao động",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tư liệu sản xuất và con người",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tư liệu sản xuất và quan hệ giữa người với người đối với tư liệu sản xuất",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tư liệu sản xuất và tổ chức, quản lý sản xuất",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 29,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 54,
    "title_raw": "Câu 54.[!b:$ Theo C.Mác, sợi dây xuyên suốt toàn bộ lịch sử nhân loại là:$]",
    "clean_text": "Theo C.Mác, sợi dây xuyên suốt toàn bộ lịch sử nhân loại là:",
    "correct_text": "Phương thức sản xuất",
    "distractors": [
      "Lực lượng sản xuất.",
      "Quan hệ sản xuất.",
      "Đấu tranh giai cấp"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Phương thức sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lực lượng sản xuất.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ sản xuất.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Đấu tranh giai cấp",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 22,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 55,
    "title_raw": "Câu 55.[!b:$ Quan hệ sản xuất được hình thành như thế nào?$]",
    "clean_text": "Quan hệ sản xuất được hình thành như thế nào?",
    "correct_text": "Do con người thiết lập trên cơ sở trình độ phát triển của lực lượng sản xuất",
    "distractors": [
      "Hình thành một cách khách quan không liên quan gì đến con người",
      "Do con người tự do thiết lập",
      "Do nhà nước định ra"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Do con người thiết lập trên cơ sở trình độ phát triển của lực lượng sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Hình thành một cách khách quan không liên quan gì đến con người",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Do con người tự do thiết lập",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Do nhà nước định ra",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 9,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 56,
    "title_raw": "Câu 56.[!b:$ Những yếu tố cấu thành lực lượng sản xuất:$]",
    "clean_text": "Những yếu tố cấu thành lực lượng sản xuất:",
    "correct_text": "Người lao động và tư liệu sản xuất",
    "distractors": [
      "Tư liệu lao động và đối tượng lao động",
      "Người lao động và công cụ lao động",
      "Máy móc và khoa học công nghệ"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Người lao động và tư liệu sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tư liệu lao động và đối tượng lao động",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Người lao động và công cụ lao động",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Máy móc và khoa học công nghệ",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 10,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 57,
    "title_raw": "Câu 57.[!b:$ Xác định quan niệm sai về mâu thuẫn và vai trò của mâu thuẫn:$]",
    "clean_text": "Xác định quan niệm sai về mâu thuẫn và vai trò của mâu thuẫn:",
    "correct_text": "Sự liên hệ, tác động lẫn nhau của các mặt đối lập trong sự vật, hiện tượng là mâu thuẫn",
    "distractors": [
      "Mâu thuẫn có tính khách quan, phổ biến trong tự nhiên, xã hội và tư duy",
      "Giải quyết xong mâu thuẫn là kết thúc cái cũ, làm nảy sinh cái mới",
      "Quy luật mâu thuẫn là hạt nhân của phép biện chứng duy vật, chỉ rõ nguồn gốc, động lực của sự phát triển"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Sự liên hệ, tác động lẫn nhau của các mặt đối lập trong sự vật, hiện tượng là mâu thuẫn",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Mâu thuẫn có tính khách quan, phổ biến trong tự nhiên, xã hội và tư duy",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Giải quyết xong mâu thuẫn là kết thúc cái cũ, làm nảy sinh cái mới",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quy luật mâu thuẫn là hạt nhân của phép biện chứng duy vật, chỉ rõ nguồn gốc, động lực của sự phát triển",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 14,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 58,
    "title_raw": "Câu 58.[!b:$ Đấu tranh của các mặt đối lập là:$]",
    "clean_text": "Đấu tranh của các mặt đối lập là:",
    "correct_text": "Tuyệt đối",
    "distractors": [
      "Tương đối",
      "Vừa tương đối vừa tuyệt đối",
      "Các mặt đối lập chỉ có thống nhất với nhau"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tuyệt đối",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tương đối",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Vừa tương đối vừa tuyệt đối",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Các mặt đối lập chỉ có thống nhất với nhau",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 23,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 59,
    "title_raw": "Câu 59.[!b:$ Theo triết học Mác - Lênin, luận điểm nào sau đây là sai:$]",
    "clean_text": "Theo triết học Mác - Lênin, luận điểm nào sau đây là sai:",
    "correct_text": "Mặt đối lập không nhất thiết phải gắn liền với sự vật",
    "distractors": [
      "Mặt đối lập tồn tại khách quan trong các sự vật",
      "Mặt đối lập là những mặt có đặc điểm trái ngược nhau",
      "Mặt đối lập là vốn có của các sự vật, hiện tượng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Mặt đối lập không nhất thiết phải gắn liền với sự vật",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Mặt đối lập tồn tại khách quan trong các sự vật",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Mặt đối lập là những mặt có đặc điểm trái ngược nhau",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Mặt đối lập là vốn có của các sự vật, hiện tượng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 27,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 60,
    "title_raw": "Câu 60.[!b:$ Chọn phương án trả lời chính xác nhất:$]",
    "clean_text": "Chọn phương án trả lời chính xác nhất:",
    "correct_text": "Phương thức thực hiện các quy luật mâu thuẫn là tích luỹ về lượng để thay đổi về chất toàn bộ sự vật",
    "distractors": [
      "Phương thức thực hiện các quy luật mâu thuẫn là mặt đối lập này đồng hoá mặt đối lập kia",
      "Phương thức thực hiện các quy luật mâu thuẫn là hai mặt đối lập cân bằng nhau",
      "Phương thức thực hiện các quy luật mâu thuẫn là thay đổi vị trí, vai trò của hai mặt đối lập"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Phương thức thực hiện các quy luật mâu thuẫn là tích luỹ về lượng để thay đổi về chất toàn bộ sự vật",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Phương thức thực hiện các quy luật mâu thuẫn là mặt đối lập này đồng hoá mặt đối lập kia",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Phương thức thực hiện các quy luật mâu thuẫn là hai mặt đối lập cân bằng nhau",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Phương thức thực hiện các quy luật mâu thuẫn là thay đổi vị trí, vai trò của hai mặt đối lập",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 24,
        "correct_letter": "C"
      },
      {
        "test_num": 7,
        "q_num": 11,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 61,
    "title_raw": "Câu 61.[!b:$ Trong một mối quan hệ nhất định cái gì xác định sự vật:$]",
    "clean_text": "Trong một mối quan hệ nhất định cái gì xác định sự vật:",
    "correct_text": "Tính quy định về chất",
    "distractors": [
      "Tính quy định về lượng",
      "Thuộc tính của sự vật",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tính quy định về chất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tính quy định về lượng",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Thuộc tính của sự vật",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 7,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 62,
    "title_raw": "Câu 62.[!b:$ Chọn phương án trả lời chính xác nhất:$]",
    "clean_text": "Chọn phương án trả lời chính xác nhất:",
    "correct_text": "Chất của sự vật là sự thống nhất hữu cơ các thuộc tính",
    "distractors": [
      "Chất của sự vật là cấu trúc sự vật",
      "Chất của sự vật là các thuộc tính sự vật",
      "Chất của sự vật là tổng số các thuộc tính sự vật"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Chất của sự vật là sự thống nhất hữu cơ các thuộc tính",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Chất của sự vật là cấu trúc sự vật",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Chất của sự vật là các thuộc tính sự vật",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Chất của sự vật là tổng số các thuộc tính sự vật",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 15,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 63,
    "title_raw": "Câu 63.[!b:$ Tư tưởng dao động, ỷ lại, trông chờ vi phạm nguyên tắc nào?$]",
    "clean_text": "Tư tưởng dao động, ỷ lại, trông chờ vi phạm nguyên tắc nào?",
    "correct_text": "Nguyên tắc phát triển",
    "distractors": [
      "Nguyên tắc toàn diện",
      "Nguyên tắc khách quan",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nguyên tắc phát triển",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguyên tắc toàn diện",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguyên tắc khách quan",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 29,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 64,
    "title_raw": "Câu 64.[!b:$ Yêu cầu của quan điểm phát triển là:$]",
    "clean_text": "Yêu cầu của quan điểm phát triển là:",
    "correct_text": "Tất cả các phương án",
    "distractors": [
      "Xem xét sự vật, hiện tượng trong quá trình vận động, phát triển không ngừng",
      "Dự báo được khuynh hướng vận động, phát triển của sự vật",
      "Phát triển là quá trình quanh co, phức tạp"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Xem xét sự vật, hiện tượng trong quá trình vận động, phát triển không ngừng",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Dự báo được khuynh hướng vận động, phát triển của sự vật",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Phát triển là quá trình quanh co, phức tạp",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 22,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 65,
    "title_raw": "Câu 65.[!b:$ Chọn câu trả lời đúng theo quan điểm triết học Mác - Lênin:$]",
    "clean_text": "Chọn câu trả lời đúng theo quan điểm triết học Mác - Lênin:",
    "correct_text": "Sự phân chia cặp mối liên hệ bên trong- bên ngoài mang tính tương đối",
    "distractors": [
      "Sự phân chia từng cặp mối liên hệ mang tính tuyệt đối",
      "Sự phân chia từng cặp mối liên hệ mang tính vừa tương đối, vừa tuyệt đối",
      "Sự phân chia từng cặp mối liên hệ chỉ mang tính chủ quan của con người"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Sự phân chia cặp mối liên hệ bên trong- bên ngoài mang tính tương đối",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Sự phân chia từng cặp mối liên hệ mang tính tuyệt đối",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Sự phân chia từng cặp mối liên hệ mang tính vừa tương đối, vừa tuyệt đối",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Sự phân chia từng cặp mối liên hệ chỉ mang tính chủ quan của con người",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 20,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 66,
    "title_raw": "Câu 66.[!b:$ Cách nhìn nhận phiến diện, một chiều vi phạm nguyên tắc nào?$]",
    "clean_text": "Cách nhìn nhận phiến diện, một chiều vi phạm nguyên tắc nào?",
    "correct_text": "Nguyên tắc toàn diện",
    "distractors": [
      "Nguyên tắc khách quan",
      "Nguyên tắc phát triển",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nguyên tắc toàn diện",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguyên tắc khách quan",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguyên tắc phát triển",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 23,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 67,
    "title_raw": "Câu 67.[!b:$ Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:$]",
    "clean_text": "Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:",
    "correct_text": "Quan điểm toàn diện đã bao hàm quan điểm lịch sử - cụ thể",
    "distractors": [
      "Quan điểm toàn diện không bao hàm quan điểm lịch sử - cụ thể",
      "Quan điểm toàn diện không bao hàm quan điểm lịch sử - cụ thể mà chỉ bao hàm quan điểm phát triển",
      "Quan điểm toàn diện bao hàm quan điểm phát triển"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan điểm toàn diện đã bao hàm quan điểm lịch sử - cụ thể",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan điểm toàn diện không bao hàm quan điểm lịch sử - cụ thể",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan điểm toàn diện không bao hàm quan điểm lịch sử - cụ thể mà chỉ bao hàm quan điểm phát triển",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan điểm toàn diện bao hàm quan điểm phát triển",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 18,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 68,
    "title_raw": "Câu 68.[!b:$ Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:$]",
    "clean_text": "Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:",
    "correct_text": "Quan điểm toàn diện yêu cầu phải đánh giá đúng vị trí, vai trò của từng mặt, từng yếu tố, từng mối liên hệ của sự vật, hiện tượng",
    "distractors": [
      "Quan điểm toàn diện yêu cầu không cần đánh giá đúng vị trí, vai trò của từng mặt, từng yếu tố, từng mối liên hệ trong quá trình cấu thành sự vật, hiện tượng.",
      "Quan điểm toàn diện yêu cầu chỉ cần đánh giá đúng vị trí, vai trò của những mối liên hệ cơ bản, chủ yếu của sự vât, hiện tượng là đủ",
      "Quan điểm toàn diện yêu cầu chỉ cần đánh giá những mối liên hệ bên ngoài là có thể đi tới kết luận bản chất của sự vật"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan điểm toàn diện yêu cầu phải đánh giá đúng vị trí, vai trò của từng mặt, từng yếu tố, từng mối liên hệ của sự vật, hiện tượng",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan điểm toàn diện yêu cầu không cần đánh giá đúng vị trí, vai trò của từng mặt, từng yếu tố, từng mối liên hệ trong quá trình cấu thành sự vật, hiện tượng.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan điểm toàn diện yêu cầu chỉ cần đánh giá đúng vị trí, vai trò của những mối liên hệ cơ bản, chủ yếu của sự vât, hiện tượng là đủ",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan điểm toàn diện yêu cầu chỉ cần đánh giá những mối liên hệ bên ngoài là có thể đi tới kết luận bản chất của sự vật",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 18,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 69,
    "title_raw": "Câu 69.[!b:$ Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:$]",
    "clean_text": "Xác định câu trả lời đúng theo quan điểm triết học Mác - Lênin:",
    "correct_text": "Quan điểm toàn diện yêu cầu phải xem xét tất cả các mặt, các yếu tố, các mối liên hệ và các giai đoạn phát triển của sự vật",
    "distractors": [
      "Quan điểm toàn diện yêu cầu xem xét các mặt, các yếu tố, các mối liên hệ của sự vật là đủ, không cần phải xem xét các giai đoạn phát triển của sự vật",
      "Quan điểm toàn diện yêu cầu xem xét các mối liên hệ cơ bản, chủ yếu của sự vật là đủ, không cần phải xem xét các mối liên hệ khác",
      "Quan điểm toàn diện yêu cầu phải xem xét các mối liên hệ không cơ bản, các giai đoạn phát triển để kết luận bản chất của sự vật"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan điểm toàn diện yêu cầu phải xem xét tất cả các mặt, các yếu tố, các mối liên hệ và các giai đoạn phát triển của sự vật",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan điểm toàn diện yêu cầu xem xét các mặt, các yếu tố, các mối liên hệ của sự vật là đủ, không cần phải xem xét các giai đoạn phát triển của sự vật",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan điểm toàn diện yêu cầu xem xét các mối liên hệ cơ bản, chủ yếu của sự vật là đủ, không cần phải xem xét các mối liên hệ khác",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan điểm toàn diện yêu cầu phải xem xét các mối liên hệ không cơ bản, các giai đoạn phát triển để kết luận bản chất của sự vật",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 30,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 70,
    "title_raw": "Câu 70.[!b:$ Thuật ngữ “Biện chứng” ra đời vào thời gian nào?$]",
    "clean_text": "Thuật ngữ “Biện chứng” ra đời vào thời gian nào?",
    "correct_text": "Thời cổ đại",
    "distractors": [
      "Thời trung đại",
      "Thời cận đại",
      "Thời hiện đại"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Thời cổ đại",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Thời trung đại",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Thời cận đại",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Thời hiện đại",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 23,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 71,
    "title_raw": "Câu 71.[!b:$ Xác định phương án đúng trong các nhận định sau:$]",
    "clean_text": "Xác định phương án đúng trong các nhận định sau:",
    "correct_text": "Phát triển là xu hướng vận động tiến lên từ thấp đến cao, từ đơn giản đến phức tạp, từ kém hoàn thiện đến hoàn thiện hơn của các sự sự vật, hiện tượng",
    "distractors": [
      "Phát triển là xu hướng vận động làm nảy sinh cái mới",
      "Phát triển là xu hướng thống trị của thế giới tiến lên từ đơn giản đến phức tạp, từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện hơn theo những quy luật nhất định",
      "Phát triển là quá trình đi lên liên tục, xuất hiện cái mới liên tục mà không bao hàm sự thụt lùi tạm thời, thoáng qua"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Phát triển là xu hướng vận động tiến lên từ thấp đến cao, từ đơn giản đến phức tạp, từ kém hoàn thiện đến hoàn thiện hơn của các sự sự vật, hiện tượng",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Phát triển là xu hướng vận động làm nảy sinh cái mới",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Phát triển là xu hướng thống trị của thế giới tiến lên từ đơn giản đến phức tạp, từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện hơn theo những quy luật nhất định",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Phát triển là quá trình đi lên liên tục, xuất hiện cái mới liên tục mà không bao hàm sự thụt lùi tạm thời, thoáng qua",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 17,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 72,
    "title_raw": "Câu 72.[!b:$ Điền từ vào chỗ trống để hoàn thiện định nghĩa: “Phát triển là một phạm trù triết học dùng để khái quát quá trình...... tiến lên từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện”:$]",
    "clean_text": "Điền từ vào chỗ trống để hoàn thiện định nghĩa: “Phát triển là một phạm trù triết học dùng để khái quát quá trình...... tiến lên từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện”:",
    "correct_text": "Vận động",
    "distractors": [
      "Phát triển",
      "Đi lên",
      "Biến đổi"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Vận động",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Phát triển",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Đi lên",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Biến đổi",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 21,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 73,
    "title_raw": "Câu 73.[!b:$ Chọn phương án trả lời đúng:$]",
    "clean_text": "Chọn phương án trả lời đúng:",
    "correct_text": "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan",
    "distractors": [
      "Ý thức là thuộc tính của một dạng vật chất có tổ chức cao là bộ óc con người nên ý thức cũng có tính vật chất",
      "Cả vật chất và ý thức đều là “hiện thực” nghĩa là đều tồn tại khách quan",
      "Ý thức con người có tính sáng tạo trong hiện thực nên nó sinh ra vật chất"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Ý thức là thuộc tính của một dạng vật chất có tổ chức cao là bộ óc con người nên ý thức cũng có tính vật chất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Cả vật chất và ý thức đều là “hiện thực” nghĩa là đều tồn tại khách quan",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Ý thức con người có tính sáng tạo trong hiện thực nên nó sinh ra vật chất",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 21,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 74,
    "title_raw": "Câu 74.[!b:$ Theo quan điểm triết học Mác - Lênin, bản chất của ý thức là:$]",
    "clean_text": "Theo quan điểm triết học Mác - Lênin, bản chất của ý thức là:",
    "correct_text": "Là hình ảnh chủ quan của thế giới khách quan",
    "distractors": [
      "Hình ảnh của thế giới khách quan",
      "Hình ảnh phản ánh sự vận động và phát triển của thế giới khách quan",
      "Là một phần chức năng của bộ óc con người"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Là hình ảnh chủ quan của thế giới khách quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Hình ảnh của thế giới khách quan",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Hình ảnh phản ánh sự vận động và phát triển của thế giới khách quan",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Là một phần chức năng của bộ óc con người",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 29,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 75,
    "title_raw": "Câu 75.[!b:$ Chọn phương án sai theo quan điểm của triết học Mác - Lênin:$]",
    "clean_text": "Chọn phương án sai theo quan điểm của triết học Mác - Lênin:",
    "correct_text": "ý thức thuần tuý là hiện tượng cá nhân",
    "distractors": [
      "Nguồn gốc trực tiếp quan trọng nhất quyết định sự ra đời và phát triển của ý thức là lao động, là thực tiễn xã hội",
      "ý thức phản ánh hiện thực khách quan vào bộ óc con người thông qua lao động, ngôn ngữ và các quan hệ xã hội",
      "ý thức là sản phẩm xã hội, là một hiện tượng xã hội"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "ý thức thuần tuý là hiện tượng cá nhân",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguồn gốc trực tiếp quan trọng nhất quyết định sự ra đời và phát triển của ý thức là lao động, là thực tiễn xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "ý thức phản ánh hiện thực khách quan vào bộ óc con người thông qua lao động, ngôn ngữ và các quan hệ xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "ý thức là sản phẩm xã hội, là một hiện tượng xã hội",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 9,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 76,
    "title_raw": "Câu 76.[!b:$ Phạm trù vật chất theo triết học Mác- Lênin được hiểu đúng và đầy đủ là:$]",
    "clean_text": "Phạm trù vật chất theo triết học Mác- Lênin được hiểu đúng và đầy đủ là:",
    "correct_text": "Là sự khái quát trong quá trình nhận thức của con người đối với thế giới khách quan",
    "distractors": [
      "Là toàn bộ thế giới vật chất",
      "Là toàn bộ thế giới khách quan",
      "Là hình thức phản ánh đối lập với thế giới vật chất"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Là sự khái quát trong quá trình nhận thức của con người đối với thế giới khách quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Là toàn bộ thế giới vật chất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Là toàn bộ thế giới khách quan",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Là hình thức phản ánh đối lập với thế giới vật chất",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 18,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 77,
    "title_raw": "Câu 77.[!b:$ Bệnh chủ quan vi phạm nguyên tắc nào?$]",
    "clean_text": "Bệnh chủ quan vi phạm nguyên tắc nào?",
    "correct_text": "Nguyên tắc khách quan",
    "distractors": [
      "Nguyên tắc lịch sử - cụ thể",
      "Nguyên tắc toàn diện.",
      "Tất cả các phương án."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nguyên tắc khách quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguyên tắc lịch sử - cụ thể",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguyên tắc toàn diện.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 2,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 78,
    "title_raw": "Câu 78.[!b:$ Theo triết học Mác - Lênin, phương án nào sau đây là sai:$]",
    "clean_text": "Theo triết học Mác - Lênin, phương án nào sau đây là sai:",
    "correct_text": "Khách quan chỉ quy định chủ quan khi chủ quan tác động tới khách quan",
    "distractors": [
      "Khách quan là tiền đề, cơ sở, giữ vai trò quyết định đối với chủ quan",
      "Khách quan quy định nội dung, sự vận động, biến đổi của chủ quan",
      "Giới hạn tính năng động chủ quan do khách quan quy định"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Khách quan chỉ quy định chủ quan khi chủ quan tác động tới khách quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Khách quan là tiền đề, cơ sở, giữ vai trò quyết định đối với chủ quan",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Khách quan quy định nội dung, sự vận động, biến đổi của chủ quan",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Giới hạn tính năng động chủ quan do khách quan quy định",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 22,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 79,
    "title_raw": "Câu 79.[!b:$ Quan điểm sau đây thuộc lập trường triết học nào: Trong nhận thức và hoạt động thực tiễn phải lấy hiện thực khách quan làm căn cứ hoạt động:$]",
    "clean_text": "Quan điểm sau đây thuộc lập trường triết học nào: Trong nhận thức và hoạt động thực tiễn phải lấy hiện thực khách quan làm căn cứ hoạt động:",
    "correct_text": "Chủ nghĩa duy vật biện chứng",
    "distractors": [
      "Chủ nghĩa duy tâm",
      "Chủ nghĩa duy vật siêu hình",
      "Chủ nghĩa duy vật mộc mạc"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Chủ nghĩa duy vật biện chứng",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Chủ nghĩa duy tâm",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Chủ nghĩa duy vật siêu hình",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Chủ nghĩa duy vật mộc mạc",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 21,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 80,
    "title_raw": "Câu 80.[!b:$ Điểm xuất phát để con người đặt ra mục đích hoạt động là gì?$]",
    "clean_text": "Điểm xuất phát để con người đặt ra mục đích hoạt động là gì?",
    "correct_text": "Điều kiện khách quan",
    "distractors": [
      "Nhu cầu và lợi ích",
      "Năng lực của họ",
      "Hoàn cảnh sống"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Điều kiện khách quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nhu cầu và lợi ích",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Năng lực của họ",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Hoàn cảnh sống",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 4,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 81,
    "title_raw": "Câu 81.[!b:$ Con người mang tính lịch sử được hiểu theo nghĩa nào là đúng:$]",
    "clean_text": "Con người mang tính lịch sử được hiểu theo nghĩa nào là đúng:",
    "correct_text": "Các thời đại lịch sử khác nhau thì có con người khác nhau",
    "distractors": [
      "Con người là sản phẩm của toàn bộ tiến trình lịch sử",
      "Con người là chủ thể sáng tạo lịch sử",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Các thời đại lịch sử khác nhau thì có con người khác nhau",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Con người là sản phẩm của toàn bộ tiến trình lịch sử",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Con người là chủ thể sáng tạo lịch sử",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 23,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 82,
    "title_raw": "Câu 82.[!b:$ Theo quan điểm của triết học Mác - Lênin, nguồn gốc quyết định hình thành con người:$]",
    "clean_text": "Theo quan điểm của triết học Mác - Lênin, nguồn gốc quyết định hình thành con người:",
    "correct_text": "Nguồn gốc xã hội",
    "distractors": [
      "Nguồn gốc tự nhiên",
      "Nguồn gốc nhân chủng",
      "Nguồn gốc di truyền"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nguồn gốc xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguồn gốc tự nhiên",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguồn gốc nhân chủng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nguồn gốc di truyền",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 26,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 83,
    "title_raw": "Câu 83.[!b:$ Tính chất nào sau đây không biểu hiện tính độc lập tương đối của ý thức xã hội:$]",
    "clean_text": "Tính chất nào sau đây không biểu hiện tính độc lập tương đối của ý thức xã hội:",
    "correct_text": "Tính chiến đấu",
    "distractors": [
      "Tính lạc hậu",
      "Tính vượt trước",
      "Sự tác động lẫn nhau giữa các hình thái ý thức xã hội"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tính chiến đấu",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tính lạc hậu",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tính vượt trước",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Sự tác động lẫn nhau giữa các hình thái ý thức xã hội",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 15,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 84,
    "title_raw": "Câu 84.[!b:$ Tính chất nào sau đây biểu hiện tính độc lập tương đối của ý thức xã hội:$]",
    "clean_text": "Tính chất nào sau đây biểu hiện tính độc lập tương đối của ý thức xã hội:",
    "correct_text": "Tất cả các phương án",
    "distractors": [
      "Tính lạc hậu",
      "Tính vượt trước",
      "Tính kế thừa"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tính lạc hậu",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tính vượt trước",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tính kế thừa",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 3,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 85,
    "title_raw": "Câu 85.[!b:$ Hoàn thiện định nghĩa: Tồn tại xã hội là toàn bộ…… và quan hệ vật chất của xã hội trong từng giai đoạn lịch sử nhất định:$]",
    "clean_text": "Hoàn thiện định nghĩa: Tồn tại xã hội là toàn bộ…… và quan hệ vật chất của xã hội trong từng giai đoạn lịch sử nhất định:",
    "correct_text": "Điều kiện sinh hoạt vật chất",
    "distractors": [
      "Điều kiện tinh thần",
      "Quan hệ tinh thần",
      "Vật chất"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Điều kiện sinh hoạt vật chất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Điều kiện tinh thần",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ tinh thần",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Vật chất",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 11,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 86,
    "title_raw": "Câu 86.[!b:$ Hình thức đấu tranh đầu tiên của giai cấp vô sản chống giai cấp tư sản:$]",
    "clean_text": "Hình thức đấu tranh đầu tiên của giai cấp vô sản chống giai cấp tư sản:",
    "correct_text": "Đấu tranh kinh tế",
    "distractors": [
      "Đấu tranh tư tưởng",
      "Đấu tranh chính trị",
      "Đấu tranh vũ trang"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Đấu tranh kinh tế",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Đấu tranh tư tưởng",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Đấu tranh chính trị",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Đấu tranh vũ trang",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 19,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 87,
    "title_raw": "Câu 87.[!b:$ Nội dung chủ yếu của đấu tranh giai cấp ở nước ta trong giai đoạn hiện nay:$]",
    "clean_text": "Nội dung chủ yếu của đấu tranh giai cấp ở nước ta trong giai đoạn hiện nay:",
    "correct_text": "Thực hiện thắng lợi sự nghiệp công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa.",
    "distractors": [
      "Xóa bỏ sự tồn tại giai cấp",
      "Dung hòa mâu thuẫn giai cấp",
      "Thực hiện bình đẳng xã hội"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Thực hiện thắng lợi sự nghiệp công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Xóa bỏ sự tồn tại giai cấp",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Dung hòa mâu thuẫn giai cấp",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Thực hiện bình đẳng xã hội",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 26,
        "correct_letter": "A"
      },
      {
        "test_num": 7,
        "q_num": 29,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 88,
    "title_raw": "Câu 88.[!b:$ Đấu tranh giai cấp,xét đến cùng là nhằm:$]",
    "clean_text": "Đấu tranh giai cấp,xét đến cùng là nhằm:",
    "correct_text": "Phát triển sản xuất",
    "distractors": [
      "Giải quyết mâu thuẫn giai cấp",
      "Lật đổ sự áp bức của giai cấp thống trị bóc lột",
      "Giành chính quyền nhà nước"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Phát triển sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Giải quyết mâu thuẫn giai cấp",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lật đổ sự áp bức của giai cấp thống trị bóc lột",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Giành chính quyền nhà nước",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 13,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 89,
    "title_raw": "Câu 89.[!b:$ Yếu tố cơ bản để giai cấp thống trị về kinh tế trở thành giai cấp thống trị về chính trị:$]",
    "clean_text": "Yếu tố cơ bản để giai cấp thống trị về kinh tế trở thành giai cấp thống trị về chính trị:",
    "correct_text": "Nhà nước",
    "distractors": [
      "Hệ thống luật pháp",
      "Hệ tư tưởng",
      "Vị thế chính trị"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nhà nước",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Hệ thống luật pháp",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Hệ tư tưởng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Vị thế chính trị",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 25,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 90,
    "title_raw": "Câu 90.[!b:$ Kết cấu giai cấp trong xã hội có giai cấp thường gồm:$]",
    "clean_text": "Kết cấu giai cấp trong xã hội có giai cấp thường gồm:",
    "correct_text": "Các giai cấp cơ bản, các giai cấp không cơ bản và tầng lớp trung gian",
    "distractors": [
      "Các giai cấp cơ bản và các giai cấp không cơ bản",
      "Các giai cấp cơ bản",
      "Các giai cấp đối kháng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Các giai cấp cơ bản, các giai cấp không cơ bản và tầng lớp trung gian",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Các giai cấp cơ bản và các giai cấp không cơ bản",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Các giai cấp cơ bản",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Các giai cấp đối kháng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 19,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 91,
    "title_raw": "Câu 91.[!b:$ Nguyên nhân trực tiếp ra đời giai cấp trong xã hội:$]",
    "clean_text": "Nguyên nhân trực tiếp ra đời giai cấp trong xã hội:",
    "correct_text": "Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất",
    "distractors": [
      "Do sự chênh lệch về khả năng giữa các tập đoàn người.",
      "Do sự phát triển lực lượng sản xuất làm xuất hiện “của dư” tương đối",
      "Do sự phân hoá giữa giàu và nghèo trong xã hội."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Do sự chênh lệch về khả năng giữa các tập đoàn người.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Do sự phát triển lực lượng sản xuất làm xuất hiện “của dư” tương đối",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Do sự phân hoá giữa giàu và nghèo trong xã hội.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 16,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 92,
    "title_raw": "Câu 92.[!b:$ Yếu tố xét đến cùng chi phối sự vận động, phát triển của một giai cấp là:$]",
    "clean_text": "Yếu tố xét đến cùng chi phối sự vận động, phát triển của một giai cấp là:",
    "correct_text": "Lợi ích cơ bản",
    "distractors": [
      "Đường lối tổ chức",
      "Hệ tư tưởng",
      "Đường lối chính trị của giai cấp thống trị"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lợi ích cơ bản",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Đường lối tổ chức",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Hệ tư tưởng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Đường lối chính trị của giai cấp thống trị",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 18,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 93,
    "title_raw": "Câu 93.[!b:$ Tiêu chuẩn cơ bản để phân biệt các giai cấp trong xã hội:$]",
    "clean_text": "Tiêu chuẩn cơ bản để phân biệt các giai cấp trong xã hội:",
    "correct_text": "Khác nhau về quan hệ sở hữu đối với tư liệu sản xuất",
    "distractors": [
      "Khác nhau về tài sản",
      "Thành phần xuất thân",
      "Mức sống"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Khác nhau về quan hệ sở hữu đối với tư liệu sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Khác nhau về tài sản",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Thành phần xuất thân",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Mức sống",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 20,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 94,
    "title_raw": "Câu 94.[!b:$ Lựa chọn phương án sai về đấu tranh giai cấp:$]",
    "clean_text": "Lựa chọn phương án sai về đấu tranh giai cấp:",
    "correct_text": "Đấu tranh giai cấp là đấu tranh của các tập đoàn người có quan điểm trái ngược nhau",
    "distractors": [
      "Đấu tranh giai cấp là đấu tranh của những tập đoàn người có lợi ích căn bản đối lập nhau",
      "Đấu tranh giai cấp là động lực trực tiếp của lịch sử",
      "Đấu tranh giai cấp là quy luật phát triển xã hội có giai cấp"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Đấu tranh giai cấp là đấu tranh của các tập đoàn người có quan điểm trái ngược nhau",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Đấu tranh giai cấp là đấu tranh của những tập đoàn người có lợi ích căn bản đối lập nhau",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Đấu tranh giai cấp là động lực trực tiếp của lịch sử",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Đấu tranh giai cấp là quy luật phát triển xã hội có giai cấp",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 1,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 95,
    "title_raw": "Câu 95.[!b:$ Sự phân chia giai cấp trong xã hội bắt đầu từ hình thái kinh tế - xã hội nào?$]",
    "clean_text": "Sự phân chia giai cấp trong xã hội bắt đầu từ hình thái kinh tế - xã hội nào?",
    "correct_text": "Chiếm hữu nô lệ",
    "distractors": [
      "Cộng sản nguyên thuỷ",
      "Phong kiến",
      "Tư bản chủ nghĩa"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Chiếm hữu nô lệ",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Cộng sản nguyên thuỷ",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Phong kiến",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tư bản chủ nghĩa",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 2,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 96,
    "title_raw": "Câu 96.[!b:$ Hiểu vấn đề “bỏ qua” chế độ tư bản chủ nghĩa ở nước ta như thế nào là đúng:$]",
    "clean_text": "Hiểu vấn đề “bỏ qua” chế độ tư bản chủ nghĩa ở nước ta như thế nào là đúng:",
    "correct_text": "Là sự “phát triển rút ngắn” và “bỏ qua” việc xác lập địa vị thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
    "distractors": [
      "Là “bỏ qua” sự phát triển lực lượng sản xuất",
      "Là sự phát triển quan hệ sản xuất",
      "Tất cả các đáp án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Là sự “phát triển rút ngắn” và “bỏ qua” việc xác lập địa vị thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Là “bỏ qua” sự phát triển lực lượng sản xuất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Là sự phát triển quan hệ sản xuất",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các đáp án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 9,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 97,
    "title_raw": "Câu 97.[!b:$ Trong hoạt động thực tiễn sai lầm của sự nóng vội là do không tôn trọng quy luật nào?$]",
    "clean_text": "Trong hoạt động thực tiễn sai lầm của sự nóng vội là do không tôn trọng quy luật nào?",
    "correct_text": "Quy luật lượng - chất",
    "distractors": [
      "Quy luật phủ định của phủ định",
      "Quy luật mâu thuẫn",
      "Cả 3 phương án trên"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quy luật lượng - chất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quy luật phủ định của phủ định",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quy luật mâu thuẫn",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Cả 3 phương án trên",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 17,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 98,
    "title_raw": "Câu 98.[!b:$ Đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là gì?$]",
    "clean_text": "Đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là gì?",
    "correct_text": "Từ một nền sản xuất nhỏ quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản",
    "distractors": [
      "Nhiều thành phần xã hội đan xen tồn tại",
      "Lực lượng sản xuất chưa phát triển",
      "Năng suất lao động thấp"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Từ một nền sản xuất nhỏ quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nhiều thành phần xã hội đan xen tồn tại",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lực lượng sản xuất chưa phát triển",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Năng suất lao động thấp",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 18,
        "correct_letter": "A"
      },
      {
        "test_num": 7,
        "q_num": 3,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 99,
    "title_raw": "Câu 99.[!b:$ Trong các hình thức đấu tranh giai cấp của thời kỳ quá độ lên chủ nghĩa xã hội, hình thức nào là cơ bản nhất:$]",
    "clean_text": "Trong các hình thức đấu tranh giai cấp của thời kỳ quá độ lên chủ nghĩa xã hội, hình thức nào là cơ bản nhất:",
    "correct_text": "Kinh tế",
    "distractors": [
      "Chính trị",
      "Văn hoá tư tưởng",
      "Quân sự"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Kinh tế",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Chính trị",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Văn hoá tư tưởng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quân sự",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 27,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 100,
    "title_raw": "Câu 100.[!b:$ Sự phát triển được biểu hiện ra trong xã hội là:$]",
    "clean_text": "Sự phát triển được biểu hiện ra trong xã hội là:",
    "correct_text": "Sự thay thế chế độ xã hội này bằng chế độ xã hội khác dân chủ, văn minh hơn",
    "distractors": [
      "Sự thay thế xã hội này bằng xã hội khác có nền kinh tế phát triển hơn",
      "Sự xuất hiện các giống loài động vật, thực vật mới thích ứng tốt hơn với môi trường",
      "Sự xuất hiện các hợp chất mới"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Sự thay thế chế độ xã hội này bằng chế độ xã hội khác dân chủ, văn minh hơn",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Sự thay thế xã hội này bằng xã hội khác có nền kinh tế phát triển hơn",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Sự xuất hiện các giống loài động vật, thực vật mới thích ứng tốt hơn với môi trường",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Sự xuất hiện các hợp chất mới",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 21,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 101,
    "title_raw": "Câu 101.[!b:$ Quan hệ sản xuất biểu hiện:$]",
    "clean_text": "Quan hệ sản xuất biểu hiện:",
    "correct_text": "Quan hệ kinh tế giữa ng¬ười với ngư¬ời trong quá trình sản xuất",
    "distractors": [
      "Quan hệ giữa con ng¬ười với tự nhiên",
      "Quan hệ giữa ng¬ười với ng¬ười trong xã hội",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan hệ kinh tế giữa ng¬ười với ngư¬ời trong quá trình sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan hệ giữa con ng¬ười với tự nhiên",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ giữa ng¬ười với ng¬ười trong xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 10,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 102,
    "title_raw": "Câu 102.[!b:$ Vì sao thời đại ngày nay khoa học trở thành lực lượng sản xuất trực tiếp:$]",
    "clean_text": "Vì sao thời đại ngày nay khoa học trở thành lực lượng sản xuất trực tiếp:",
    "correct_text": "Khoa học thâm nhập vào các yếu tố cấu thành lực lượng sản xuất, đem lại sự thay đổi về chất của lực lượng sản xuất",
    "distractors": [
      "Khoa học phát triển như vũ bão",
      "Lợi ích do khoa học mang lại ngày càng tăng",
      "Không câu trả lời nào đúng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Khoa học thâm nhập vào các yếu tố cấu thành lực lượng sản xuất, đem lại sự thay đổi về chất của lực lượng sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Khoa học phát triển như vũ bão",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lợi ích do khoa học mang lại ngày càng tăng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Không câu trả lời nào đúng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 21,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 103,
    "title_raw": "Câu 103.[!b:$ Cách viết nào sau đây là đúng:$]",
    "clean_text": "Cách viết nào sau đây là đúng:",
    "correct_text": "Hình thái kinh tế - xã hội",
    "distractors": [
      "Hình thái kinh tế của xã hội",
      "Hình thái kinh tế và xã hội",
      "Hình thái kinh tế, xã hội"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Hình thái kinh tế - xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Hình thái kinh tế của xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Hình thái kinh tế và xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Hình thái kinh tế, xã hội",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 27,
        "correct_letter": "A"
      },
      {
        "test_num": 7,
        "q_num": 22,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 104,
    "title_raw": "Câu 104.[!b:$ Theo quan điểm của triết học Mác - Lênin, phạm trù hình thái kinh tế - xã hội được áp dụng:$]",
    "clean_text": "Theo quan điểm của triết học Mác - Lênin, phạm trù hình thái kinh tế - xã hội được áp dụng:",
    "correct_text": "Cho mọi xã hội trong lịch sử",
    "distractors": [
      "Cho một xã hội cụ thể",
      "Cho xã hội tư bản chủ nghĩa",
      "Cho xã hội cộng sản chủ nghĩa"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Cho mọi xã hội trong lịch sử",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Cho một xã hội cụ thể",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Cho xã hội tư bản chủ nghĩa",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Cho xã hội cộng sản chủ nghĩa",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 1,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 105,
    "title_raw": "Câu 105.[!b:$ Cơ sở hạ tầng của xã hội là:$]",
    "clean_text": "Cơ sở hạ tầng của xã hội là:",
    "correct_text": "Tổng hợp các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
    "distractors": [
      "Đường xá, bến cảng, bưu điện…",
      "Toàn bộ cơ sở vật chất - kỹ thuật của xã hội",
      "Đời sống vật chất"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tổng hợp các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Đường xá, bến cảng, bưu điện…",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Toàn bộ cơ sở vật chất - kỹ thuật của xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Đời sống vật chất",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 13,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 106,
    "title_raw": "Câu 106.[!b:$ Vai trò quyết định của cơ sở hạ tầng đối với kiến trúc thượng tầng thể hiện như thế nào?$]",
    "clean_text": "Vai trò quyết định của cơ sở hạ tầng đối với kiến trúc thượng tầng thể hiện như thế nào?",
    "correct_text": "Mỗi cơ sở hạ tầng hình thành nên kiến trúc thượng tầng tương ứng",
    "distractors": [
      "Chính sách kinh tế quyết định tình trạng kinh tế của xã hội",
      "Kiến trúc thượng tầng làm thay đổi cơ sở hạ tầng",
      "Đấu tranh chính trị là nguyên nhân của đấu tranh kinh tế"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Mỗi cơ sở hạ tầng hình thành nên kiến trúc thượng tầng tương ứng",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Chính sách kinh tế quyết định tình trạng kinh tế của xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Kiến trúc thượng tầng làm thay đổi cơ sở hạ tầng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Đấu tranh chính trị là nguyên nhân của đấu tranh kinh tế",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 5,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 107,
    "title_raw": "Câu 107.[!b:$ Thực chất quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng:$]",
    "clean_text": "Thực chất quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng:",
    "correct_text": "Quan hệ giữa kinh tế và chính trị",
    "distractors": [
      "Quan hệ giữa đời sống vật chất và đời sống tinh thần của xã hội",
      "Quan hệ giữa vật chất và tinh thần",
      "Quan hệ giữa tồn tại xã hội với ý thức xã hội"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan hệ giữa kinh tế và chính trị",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan hệ giữa đời sống vật chất và đời sống tinh thần của xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ giữa vật chất và tinh thần",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan hệ giữa tồn tại xã hội với ý thức xã hội",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 9,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 108,
    "title_raw": "Câu 108.[!b:$ Chế độ sở hữu chủ yếu của thời kỳ quá độ lên chủ nghĩa xã hội là:$]",
    "clean_text": "Chế độ sở hữu chủ yếu của thời kỳ quá độ lên chủ nghĩa xã hội là:",
    "correct_text": "Công hữu về tư liệu sản xuất",
    "distractors": [
      "Đa hình thức sở hữu",
      "Tư hữu về tư liệu sản xuất",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Công hữu về tư liệu sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Đa hình thức sở hữu",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tư hữu về tư liệu sản xuất",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 2,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 109,
    "title_raw": "Câu 109.[!b:$ Tính chất của lực lượng sản xuất  là:$]",
    "clean_text": "Tính chất của lực lượng sản xuất  là:",
    "correct_text": "Tính chất cá nhân và tính chất xã hội",
    "distractors": [
      "Tính chất hiện đại và tính chất cá nhân",
      "Tính chất xã hội và tính chất hiện đại",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tính chất cá nhân và tính chất xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tính chất hiện đại và tính chất cá nhân",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tính chất xã hội và tính chất hiện đại",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 29,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 110,
    "title_raw": "Câu 110.[!b:$ Trong quan hệ sản xuất, quan hệ nào giữ vai trò quyết định:$]",
    "clean_text": "Trong quan hệ sản xuất, quan hệ nào giữ vai trò quyết định:",
    "correct_text": "Quan hệ sở hữu tư liệu sản xuất",
    "distractors": [
      "Quan hệ tổ chức, quản lý sản xuất",
      "Quan hệ phân phối sản phẩm",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan hệ sở hữu tư liệu sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan hệ tổ chức, quản lý sản xuất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ phân phối sản phẩm",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 8,
        "correct_letter": "B"
      },
      {
        "test_num": 7,
        "q_num": 6,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 111,
    "title_raw": "Câu 111.[!b:$ Trình độ của lực lượng sản xuất thể hiện ở điểm nào sau đây:$]",
    "clean_text": "Trình độ của lực lượng sản xuất thể hiện ở điểm nào sau đây:",
    "correct_text": "Tất cả các phương án trên",
    "distractors": [
      "Trình độ tổ chức và phân công lao động xã hội",
      "Trình độ ứng dụng khoa học vào sản xuất",
      "Trình độ công cụ lao động và con người lao động"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án trên",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Trình độ tổ chức và phân công lao động xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Trình độ ứng dụng khoa học vào sản xuất",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Trình độ công cụ lao động và con người lao động",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 20,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 112,
    "title_raw": "Câu 112.[!b:$ Đâu là yếu tố không thuộc về quan hệ sản xuất:$]",
    "clean_text": "Đâu là yếu tố không thuộc về quan hệ sản xuất:",
    "correct_text": "Quan hệ kinh tế và chính trị",
    "distractors": [
      "Quan hệ trong tổ chức và quản lý sản xuất",
      "Quan hệ về sở hữu đối với tư liệu sản xuất",
      "Quan hệ trong phân phối sản phẩm lao động"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan hệ kinh tế và chính trị",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan hệ trong tổ chức và quản lý sản xuất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ về sở hữu đối với tư liệu sản xuất",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan hệ trong phân phối sản phẩm lao động",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 1,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 113,
    "title_raw": "Câu 113.[!b:$ Yếu tố xét đến cùng quyết định sự vận động, phát triển của các hình thái kinh tế - xã hội:$]",
    "clean_text": "Yếu tố xét đến cùng quyết định sự vận động, phát triển của các hình thái kinh tế - xã hội:",
    "correct_text": "Sự phát triển của lực lượng sản xuất",
    "distractors": [
      "Sự phát triển của quan hệ sản xuất",
      "Sự phát triển của con người",
      "Sự lãnh đạo của các vĩ nhân"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Sự phát triển của lực lượng sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Sự phát triển của quan hệ sản xuất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Sự phát triển của con người",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Sự lãnh đạo của các vĩ nhân",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 27,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 114,
    "title_raw": "Câu 114.[!b:$ Chọn phương án đúng nhất về sản xuất vật chất:$]",
    "clean_text": "Chọn phương án đúng nhất về sản xuất vật chất:",
    "correct_text": "Sản xuất vật chất là quá trình tạo ra của cải vật chất",
    "distractors": [
      "Sản xuất vật chất là quá trình con người tác động vào tự nhiên làm biến đổi tự nhiên",
      "Sản xuất vật chất là quá trình sản xuất xã hội",
      "Sản xuất vật chất là quá trình tạo ra tư liệu sản xuất"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Sản xuất vật chất là quá trình tạo ra của cải vật chất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Sản xuất vật chất là quá trình con người tác động vào tự nhiên làm biến đổi tự nhiên",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Sản xuất vật chất là quá trình sản xuất xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Sản xuất vật chất là quá trình tạo ra tư liệu sản xuất",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 4,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 115,
    "title_raw": "Câu 115.[!b:$ Một chu kỳ của quá trình phủ định được thực hiện qua mấy lần phủ định cơ bản:$]",
    "clean_text": "Một chu kỳ của quá trình phủ định được thực hiện qua mấy lần phủ định cơ bản:",
    "correct_text": "Hai lần cơ bản",
    "distractors": [
      "Một lần",
      "Sự vật nào cũng có 3 lần phủ định cơ bản",
      "Ít nhất một lần"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Hai lần cơ bản",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Một lần",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Sự vật nào cũng có 3 lần phủ định cơ bản",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Ít nhất một lần",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 16,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 116,
    "title_raw": "Câu 116.[!b:$ Quy luật phủ định của phủ định làm rõ vấn đề gì?$]",
    "clean_text": "Quy luật phủ định của phủ định làm rõ vấn đề gì?",
    "correct_text": "Khuynh hướng của sự phát triển",
    "distractors": [
      "Nguồn gốc của sự phát triển",
      "Cách thức của sự phát triển",
      "Động lực của sự phát triển"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Khuynh hướng của sự phát triển",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguồn gốc của sự phát triển",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Cách thức của sự phát triển",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Động lực của sự phát triển",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 27,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 117,
    "title_raw": "Câu 117.[!b:$ Xác định quan niệm sai về phủ định của phủ định:$]",
    "clean_text": "Xác định quan niệm sai về phủ định của phủ định:",
    "correct_text": "Phủ định của phủ định là sự lặp lại cái cũ theo đường tròn khép kín",
    "distractors": [
      "Phủ định của phủ định có hình “xoáy ốc” theo hướng tiến lên đến vô tận",
      "Phủ định của phủ định là phổ biến trong tự nhiên, xã hội, tư duy",
      "Phủ định của phủ định trong tư duy con người là sự phản ánh phủ định của phủ định trong hiện thực"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Phủ định của phủ định là sự lặp lại cái cũ theo đường tròn khép kín",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Phủ định của phủ định có hình “xoáy ốc” theo hướng tiến lên đến vô tận",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Phủ định của phủ định là phổ biến trong tự nhiên, xã hội, tư duy",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Phủ định của phủ định trong tư duy con người là sự phản ánh phủ định của phủ định trong hiện thực",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 1,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 118,
    "title_raw": "Câu 118.[!b:$ Quy luật thống nhất và đấu tranh của các mặt đối lập chỉ rõ vấn đề gì?$]",
    "clean_text": "Quy luật thống nhất và đấu tranh của các mặt đối lập chỉ rõ vấn đề gì?",
    "correct_text": "Nguồn gốc, động lực của sự phát triển",
    "distractors": [
      "Khuynh hướng của sự phát triển",
      "Cách thức của sự phát triển",
      "Phương thức của sự phát triển"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nguồn gốc, động lực của sự phát triển",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Khuynh hướng của sự phát triển",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Cách thức của sự phát triển",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Phương thức của sự phát triển",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 7,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 119,
    "title_raw": "Câu 119.[!b:$ Theo quan điểm của triết học Mác - Lênin, sự thống nhất của các mặt đối lập có biểu hiện:$]",
    "clean_text": "Theo quan điểm của triết học Mác - Lênin, sự thống nhất của các mặt đối lập có biểu hiện:",
    "correct_text": "Tất cả các phương án",
    "distractors": [
      "Sự cùng tồn tại, nương tựa nhau",
      "Sự tác động ngang bằng nhau",
      "Sự bài trừ, phủ định nhau"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Sự cùng tồn tại, nương tựa nhau",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Sự tác động ngang bằng nhau",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Sự bài trừ, phủ định nhau",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 30,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 120,
    "title_raw": "Câu 120.[!b:$ Quan điểm ủng hộ cái mới tiến bộ, chống lại cái cũ, lỗi thời được rút ra từ:$]",
    "clean_text": "Quan điểm ủng hộ cái mới tiến bộ, chống lại cái cũ, lỗi thời được rút ra từ:",
    "correct_text": "Quy luật phủ định của phủ định",
    "distractors": [
      "Quy luật thống nhất và đấu tranh của các mặt đối lập",
      "Quy luật xã hội",
      "Quy luật chuyển hoá từ những sự thay đổi về lượng thành sự thay đổi về chất và ngược lại"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quy luật phủ định của phủ định",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quy luật thống nhất và đấu tranh của các mặt đối lập",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quy luật xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quy luật chuyển hoá từ những sự thay đổi về lượng thành sự thay đổi về chất và ngược lại",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 17,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 121,
    "title_raw": "Câu 121.[!b:$ Khuynh hướng nôn nóng, vội vàng, không tích luỹ đủ lượng đã muốn thực hiện bước nhảy thể hiện tư tưởng gì?$]",
    "clean_text": "Khuynh hướng nôn nóng, vội vàng, không tích luỹ đủ lượng đã muốn thực hiện bước nhảy thể hiện tư tưởng gì?",
    "correct_text": "Tả khuynh",
    "distractors": [
      "Hữu khuynh",
      "Dung hòa",
      "Thỏa hiệp"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tả khuynh",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Hữu khuynh",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Dung hòa",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Thỏa hiệp",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 11,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 122,
    "title_raw": "Câu 122.[!b:$ Quy luật chuyển hoá từ nhưng sự thay đổi về lượng dẫn tới sự thay đổi về chất và ngược lại làm rõ vấn đề gì?$]",
    "clean_text": "Quy luật chuyển hoá từ nhưng sự thay đổi về lượng dẫn tới sự thay đổi về chất và ngược lại làm rõ vấn đề gì?",
    "correct_text": "Cách thức của sự phát triển",
    "distractors": [
      "Khuynh hướng của sự phát triển",
      "Nguồn gốc của sự phát triển",
      "Động lực của sự phát triển"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Cách thức của sự phát triển",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Khuynh hướng của sự phát triển",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguồn gốc của sự phát triển",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Động lực của sự phát triển",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 12,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 123,
    "title_raw": "Câu 123.[!b:$ Chọn câu trả lời đúng theo quan điểm của triết học Mác - Lênin:$]",
    "clean_text": "Chọn câu trả lời đúng theo quan điểm của triết học Mác - Lênin:",
    "correct_text": "Nguồn gốc của sự phát triển là do mâu thuẫn bên trong của sự sự vật, hiện tượng quy định",
    "distractors": [
      "Nguồn gốc của sự phát triển là ở bên ngoài sự sự vật, hiện tượng",
      "Nguồn gốc của sự phát triển của sự sự vật, hiện tượng là do ý thức quy định",
      "Nguồn gốc của sự phát triển là sự kết hợp giữa con người và sự vật"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nguồn gốc của sự phát triển là do mâu thuẫn bên trong của sự sự vật, hiện tượng quy định",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguồn gốc của sự phát triển là ở bên ngoài sự sự vật, hiện tượng",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguồn gốc của sự phát triển của sự sự vật, hiện tượng là do ý thức quy định",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nguồn gốc của sự phát triển là sự kết hợp giữa con người và sự vật",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 16,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 124,
    "title_raw": "Câu 124.[!b:$ Chọn câu trả lời đúng theo quan điểm của triết học Mác - Lênin:$]",
    "clean_text": "Chọn câu trả lời đúng theo quan điểm của triết học Mác - Lênin:",
    "correct_text": "Phát triển của sự vật có tính kế thừa nhưng trên cơ sở có phê phán, lọc bỏ, cải tạo và phát triển cái cũ",
    "distractors": [
      "Phát triển là sự kế thừa nguyên xi cái cũ hoặc lắp ghép từ cái cũ sang cái mới một cách máy móc về hình thức",
      "Phát triển của sự vật không có tính kế thừa",
      "Phát triển của sự vật không bao gồm sự thụt lùi tạm thời"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Phát triển của sự vật có tính kế thừa nhưng trên cơ sở có phê phán, lọc bỏ, cải tạo và phát triển cái cũ",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Phát triển là sự kế thừa nguyên xi cái cũ hoặc lắp ghép từ cái cũ sang cái mới một cách máy móc về hình thức",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Phát triển của sự vật không có tính kế thừa",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Phát triển của sự vật không bao gồm sự thụt lùi tạm thời",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 1,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 125,
    "title_raw": "Câu 125.[!b:$ Theo quan điểm triết học Mác - Lênin, cơ sở lý luận của quan điểm toàn diện là:$]",
    "clean_text": "Theo quan điểm triết học Mác - Lênin, cơ sở lý luận của quan điểm toàn diện là:",
    "correct_text": "Nguyên lý về mối liên hệ phổ biến",
    "distractors": [
      "Nguyên lý về sự phát triển",
      "Quy luật thống nhất và đấu tranh của các mặt đối lập",
      "Nguyên tắc thống nhất giữa lý luận với thực tiễn"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nguyên lý về mối liên hệ phổ biến",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguyên lý về sự phát triển",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quy luật thống nhất và đấu tranh của các mặt đối lập",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nguyên tắc thống nhất giữa lý luận với thực tiễn",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 12,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 126,
    "title_raw": "Câu 126.[!b:$ Mối liên hệ của các sự sự vật, hiện tượng là gì?$]",
    "clean_text": "Mối liên hệ của các sự sự vật, hiện tượng là gì?",
    "correct_text": "Là sự tác động, chuyển hoá một cách khách quan giữa các mặt, quá trình hoặc giữa các sự vật, hiện tượng với nhau",
    "distractors": [
      "Là sự thừa nhận giữa các mặt hoặc giữa các sự vật không có mối liên hệ",
      "Là sự tác động lẫn nhau, có tính khách quan nhưng không thể chuyển hoá cho nhau",
      "Mối liên hệ của sự vật, hiện tượng là do ý thức của con người tạo ra"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Là sự tác động, chuyển hoá một cách khách quan giữa các mặt, quá trình hoặc giữa các sự vật, hiện tượng với nhau",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Là sự thừa nhận giữa các mặt hoặc giữa các sự vật không có mối liên hệ",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Là sự tác động lẫn nhau, có tính khách quan nhưng không thể chuyển hoá cho nhau",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Mối liên hệ của sự vật, hiện tượng là do ý thức của con người tạo ra",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 24,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 127,
    "title_raw": "Câu 127.[!b:$ Chọn phương án trả lời sai:$]",
    "clean_text": "Chọn phương án trả lời sai:",
    "correct_text": "Phương pháp biện chứng coi nguyên nhân biến đổi nằm ngoài đối tượng",
    "distractors": [
      "Phương pháp biện chứng nhận thức đối tượng trong sự tác động, ảnh hưởng lẫn nhau",
      "Phương pháp biện chứng nhận thức đối tượng trong sự vận động, khuynh hướng chung là phát triển",
      "Phương pháp biện chứng nhận thức đối tượng trong sự liên hệ, chi phối lẫn nhau"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Phương pháp biện chứng coi nguyên nhân biến đổi nằm ngoài đối tượng",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Phương pháp biện chứng nhận thức đối tượng trong sự tác động, ảnh hưởng lẫn nhau",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Phương pháp biện chứng nhận thức đối tượng trong sự vận động, khuynh hướng chung là phát triển",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Phương pháp biện chứng nhận thức đối tượng trong sự liên hệ, chi phối lẫn nhau",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 25,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 128,
    "title_raw": "Câu 128.[!b:$ Chọn phương án đúng theo quan điểm của triết học Mác - Lênin:$]",
    "clean_text": "Chọn phương án đúng theo quan điểm của triết học Mác - Lênin:",
    "correct_text": "Độ là phạm trù chỉ giới hạn biến đổi của lượng, trong đó chưa làm thay đổi chất của sự vật",
    "distractors": [
      "Độ là phạm trù chỉ sự biến đổi của chất",
      "Độ là phạm trù chỉ sự biến đổi của lượng",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Độ là phạm trù chỉ giới hạn biến đổi của lượng, trong đó chưa làm thay đổi chất của sự vật",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Độ là phạm trù chỉ sự biến đổi của chất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Độ là phạm trù chỉ sự biến đổi của lượng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 25,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 129,
    "title_raw": "Câu 129.[!b:$ Sự biến đổi về lượng của sự vật đạt đến mức độ nào mới làm cho chất của sự vật thay đổi:$]",
    "clean_text": "Sự biến đổi về lượng của sự vật đạt đến mức độ nào mới làm cho chất của sự vật thay đổi:",
    "correct_text": "Vượt giới hạn độ",
    "distractors": [
      "Chưa tới giới hạn độ",
      "Trong giới hạn độ",
      "Không có sự biến đổi về chất"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Vượt giới hạn độ",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Chưa tới giới hạn độ",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Trong giới hạn độ",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Không có sự biến đổi về chất",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 13,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 130,
    "title_raw": "Câu 130.[!b:$ Mối liên hệ không có tính chất nào sau đây:$]",
    "clean_text": "Mối liên hệ không có tính chất nào sau đây:",
    "correct_text": "Tính kế thừa",
    "distractors": [
      "Tính khách quan",
      "Tính phong phú, nhiều vẻ",
      "Tính phổ biến"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tính kế thừa",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tính khách quan",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tính phong phú, nhiều vẻ",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tính phổ biến",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 22,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 131,
    "title_raw": "Câu 131.[!b:$ Lựa chọn câu đúng theo quan điểm chủ nghĩa duy vật biện chứng:$]",
    "clean_text": "Lựa chọn câu đúng theo quan điểm chủ nghĩa duy vật biện chứng:",
    "correct_text": "Phát triển không chỉ là sự thay đổi về lượng mà còn thay đổi về chất của sự vật, hiện tượng",
    "distractors": [
      "Phát triển là sự thay đổi vị trí của sự vật, hiện tượng trong không gian, thời gian",
      "Phát triển là sự thay đổi thuần tuý về lượng của sự sự vật, hiện tượng",
      "Phát triển của sự vật, hiện tượng là do con người điều khiển"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Phát triển không chỉ là sự thay đổi về lượng mà còn thay đổi về chất của sự vật, hiện tượng",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Phát triển là sự thay đổi vị trí của sự vật, hiện tượng trong không gian, thời gian",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Phát triển là sự thay đổi thuần tuý về lượng của sự sự vật, hiện tượng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Phát triển của sự vật, hiện tượng là do con người điều khiển",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 26,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 132,
    "title_raw": "Câu 132.[!b:$ Cơ sở khoa học của mối quan hệ khách quan - chủ quan là gì?$]",
    "clean_text": "Cơ sở khoa học của mối quan hệ khách quan - chủ quan là gì?",
    "correct_text": "Vật chất và ý thức",
    "distractors": [
      "Cơ sở hạ tầng và kiến trúc thượng tầng",
      "Tồn tại xã hội và ý thức xã hội",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Vật chất và ý thức",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Cơ sở hạ tầng và kiến trúc thượng tầng",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tồn tại xã hội và ý thức xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 25,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 133,
    "title_raw": "Câu 133.[!b:$ Phạm trù ý thức theo triết học Mác - Lênin được hiểu là:$]",
    "clean_text": "Phạm trù ý thức theo triết học Mác - Lênin được hiểu là:",
    "correct_text": "Hình ảnh chủ quan của thế giới khách quan",
    "distractors": [
      "Sự hồi tưởng của linh hồn vũ trụ",
      "Ý thức của lực lượng siêu nhiên",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Hình ảnh chủ quan của thế giới khách quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Sự hồi tưởng của linh hồn vũ trụ",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Ý thức của lực lượng siêu nhiên",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 14,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 134,
    "title_raw": "Câu 134.[!b:$ Phạm trù vật chất theo triết học Mác - Lênin được hiểu là:$]",
    "clean_text": "Phạm trù vật chất theo triết học Mác - Lênin được hiểu là:",
    "correct_text": "Là sự khái quát trong nhận thức của con người về thế giới khách quan",
    "distractors": [
      "Hình thức phản ánh đối lập với thế giới vật chất",
      "Toàn bộ thế giới khách quan",
      "Toàn bộ thế giới vật chất"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Là sự khái quát trong nhận thức của con người về thế giới khách quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Hình thức phản ánh đối lập với thế giới vật chất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Toàn bộ thế giới khách quan",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Toàn bộ thế giới vật chất",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 3,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 135,
    "title_raw": "Câu 135.[!b:$ Theo quan điểm của triết học Mác - Lênin, bệnh chủ quan, duy ý chí vi phạm nguyên tắc nào?$]",
    "clean_text": "Theo quan điểm của triết học Mác - Lênin, bệnh chủ quan, duy ý chí vi phạm nguyên tắc nào?",
    "correct_text": "Nguyên tắc khách quan",
    "distractors": [
      "Nguyên tắc lịch sử - cụ thể",
      "Nguyên tắc phát triển",
      "Nguyên tắc toàn diện"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nguyên tắc khách quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguyên tắc lịch sử - cụ thể",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguyên tắc phát triển",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nguyên tắc toàn diện",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 19,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 136,
    "title_raw": "Câu 136.[!b:$ Nguyên tắc nào rút ra từ mối quan hệ khách quan - chủ quan:$]",
    "clean_text": "Nguyên tắc nào rút ra từ mối quan hệ khách quan - chủ quan:",
    "correct_text": "Nguyên tắc tôn trọng khách quan và phát huy tính năng động chủ quan",
    "distractors": [
      "Nguyên tắc toàn diện",
      "Nguyên tắc lịch sử - cụ thể",
      "Nguyên tắc phát triển"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nguyên tắc tôn trọng khách quan và phát huy tính năng động chủ quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguyên tắc toàn diện",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguyên tắc lịch sử - cụ thể",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nguyên tắc phát triển",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 7,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 137,
    "title_raw": "Câu 137.[!b:$ Lựa chọn câu đúng theo quan điểm của triết học Mác - Lênin:$]",
    "clean_text": "Lựa chọn câu đúng theo quan điểm của triết học Mác - Lênin:",
    "correct_text": "Mọi sự sáng tạo của con người đều bắt nguồn từ sự phản ánh đúng hiện thực khách quan, đồng thời phát huy tính năng động chủ quan",
    "distractors": [
      "Con người không sáng tạo mà chỉ bắt chước hiện thực khách quan",
      "Phát huy tính năng động chủ quan không phụ thuộc vào khách quan",
      "Sự sáng tạo của con người là có giới hạn bởi hiện thực khách quan"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Mọi sự sáng tạo của con người đều bắt nguồn từ sự phản ánh đúng hiện thực khách quan, đồng thời phát huy tính năng động chủ quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Con người không sáng tạo mà chỉ bắt chước hiện thực khách quan",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Phát huy tính năng động chủ quan không phụ thuộc vào khách quan",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Sự sáng tạo của con người là có giới hạn bởi hiện thực khách quan",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 19,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 138,
    "title_raw": "Câu 138.[!b:$ Theo quan điểm của triết học Mác - Lênin, quan hệ khách quan - chủ quan:$]",
    "clean_text": "Theo quan điểm của triết học Mác - Lênin, quan hệ khách quan - chủ quan:",
    "correct_text": "Có quan hệ biện chứng với nhau",
    "distractors": [
      "Khách quan quyết định chủ quan tuyệt đối",
      "Chủ quan không tác động tới khách quan",
      "Chủ quan quyết định khách quan"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Có quan hệ biện chứng với nhau",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Khách quan quyết định chủ quan tuyệt đối",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Chủ quan không tác động tới khách quan",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Chủ quan quyết định khách quan",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 10,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 139,
    "title_raw": "Câu 139.[!b:$ Yếu tố nào không thuộc phạm trù chủ quan:$]",
    "clean_text": "Yếu tố nào không thuộc phạm trù chủ quan:",
    "correct_text": "Điều kiện hoạt động của chủ thể",
    "distractors": [
      "Ý chí",
      "Tri thức",
      "Động cơ"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Điều kiện hoạt động của chủ thể",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Ý chí",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Tri thức",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Động cơ",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 11,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 140,
    "title_raw": "Câu 140.[!b:$ Yếu tố nào không thuộc phạm trù khách quan:$]",
    "clean_text": "Yếu tố nào không thuộc phạm trù khách quan:",
    "correct_text": "Tư duy của chủ thể",
    "distractors": [
      "Điều kiện khách quan",
      "Khả năng khách quan",
      "Quy luật khách quan"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tư duy của chủ thể",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Điều kiện khách quan",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Khả năng khách quan",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quy luật khách quan",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 8,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 141,
    "title_raw": "Câu 141.[!b:$ Cái quy định hành vi lịch sử đầu tiên và cũng là động lực thúc đẩy con người hoạt động trong suốt lịch sử của mình là:$]",
    "clean_text": "Cái quy định hành vi lịch sử đầu tiên và cũng là động lực thúc đẩy con người hoạt động trong suốt lịch sử của mình là:",
    "correct_text": "Nhu cầu và lợi ích.",
    "distractors": [
      "Khát vọng quyền lực về kinh tế, chính trị.",
      "Mục tiêu, lý tưởng",
      "Lý tưởng sống"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nhu cầu và lợi ích.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Khát vọng quyền lực về kinh tế, chính trị.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Mục tiêu, lý tưởng",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Lý tưởng sống",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 19,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 142,
    "title_raw": "Câu 142.[!b:$ Yêu cầu phát huy nhân tố con người trong quân đội ta hiện nay:$]",
    "clean_text": "Yêu cầu phát huy nhân tố con người trong quân đội ta hiện nay:",
    "correct_text": "Tất cả các phương án",
    "distractors": [
      "Giải quyết hài hòa vấn đề lợi ích",
      "Dân chủ hóa đời sống, xây dựng môi trường văn hóa lành mạnh",
      "Phát triển, bồi dưỡng năng lực toàn diện cho cán bộ, chiến sĩ"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Giải quyết hài hòa vấn đề lợi ích",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Dân chủ hóa đời sống, xây dựng môi trường văn hóa lành mạnh",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Phát triển, bồi dưỡng năng lực toàn diện cho cán bộ, chiến sĩ",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 26,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 143,
    "title_raw": "Câu 143.[!b:$ Chọn phương án đúng về xuất phát điểm C.Mác nghiên cứu con người:$]",
    "clean_text": "Chọn phương án đúng về xuất phát điểm C.Mác nghiên cứu con người:",
    "correct_text": "Con người thực tiễn gắn với sản xuất vật chất",
    "distractors": [
      "Con người lịch sử xã hội",
      "Con người tôn giáo",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Con người thực tiễn gắn với sản xuất vật chất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Con người lịch sử xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Con người tôn giáo",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 21,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 144,
    "title_raw": "Câu 144.[!b:$ Luận điểm: “Khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc” được nêu trong đại hội Đảng lần thứ bao nhiêu?$]",
    "clean_text": "Luận điểm: “Khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc” được nêu trong đại hội Đảng lần thứ bao nhiêu?",
    "correct_text": "Lần thứ XIII",
    "distractors": [
      "Lần thứ XII",
      "Lần thứ XI",
      "Lần thứ X"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lần thứ XIII",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lần thứ XII",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lần thứ XI",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Lần thứ X",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 3,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 145,
    "title_raw": "Câu 145.[!b:$ Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau sai:$]",
    "clean_text": "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau sai:",
    "correct_text": "Không phải lúc nào các mặt đối lập cũng liên hệ với nhau",
    "distractors": [
      "Các mặt đối lập nằm trong sự liên hệ với nhau, không có mặt đối lập nào tồn tại biệt lập.",
      "Các mặt đối lập liên hệ, tác động qua lại với nhau một cách khách quan.",
      "Các mặt đối lập đấu tranh làm sự vật vận động, biến đổi"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Không phải lúc nào các mặt đối lập cũng liên hệ với nhau",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Các mặt đối lập nằm trong sự liên hệ với nhau, không có mặt đối lập nào tồn tại biệt lập.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Các mặt đối lập liên hệ, tác động qua lại với nhau một cách khách quan.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Các mặt đối lập đấu tranh làm sự vật vận động, biến đổi",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 11,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 146,
    "title_raw": "Câu 146.[!b:$ Tiêu chuẩn cơ bản nhất của tiến bộ xã hội là:$]",
    "clean_text": "Tiêu chuẩn cơ bản nhất của tiến bộ xã hội là:",
    "correct_text": "Trình độ phát triển của lực lượng sản xuất",
    "distractors": [
      "Trình độ dân trí và mức sống cao của xã hội",
      "Trình độ phát triển của khoa học kỹ thuật",
      "Trình độ phát triển của đạo đức, luật pháp, tôn giáo"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Trình độ phát triển của lực lượng sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Trình độ dân trí và mức sống cao của xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Trình độ phát triển của khoa học kỹ thuật",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Trình độ phát triển của đạo đức, luật pháp, tôn giáo",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 15,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 147,
    "title_raw": "Câu 147.[!b:$ Lựa chọn phương án đúng: Xây dựng cán bộ Quân đội “7 dám”:$]",
    "clean_text": "Lựa chọn phương án đúng: Xây dựng cán bộ Quân đội “7 dám”:",
    "correct_text": "Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung",
    "distractors": [
      "Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì Tổ quốc",
      "Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám cầu thị, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung",
      "Dám nghĩ, dám học hỏi, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì Tổ quốc",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám cầu thị, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Dám nghĩ, dám học hỏi, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 10,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 148,
    "title_raw": "Câu 148.[!b:$ Hoàn thiện luận điểm theo Đại hội XIII: “Phát triển con người toàn diện và xây dựng nền văn hóa Việt Nam ………”?$]",
    "clean_text": "Hoàn thiện luận điểm theo Đại hội XIII: “Phát triển con người toàn diện và xây dựng nền văn hóa Việt Nam ………”?",
    "correct_text": "Tiên tiến, đậm đà bản sắc dân tộc",
    "distractors": [
      "Hòa nhập và phát triển",
      "Hiện đại và bản sắc dân tộc",
      "Đậm đà bản sắc dân tộc"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tiên tiến, đậm đà bản sắc dân tộc",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Hòa nhập và phát triển",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Hiện đại và bản sắc dân tộc",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Đậm đà bản sắc dân tộc",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 5,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 149,
    "title_raw": "Câu 149.[!b:$ Luận điểm: “Nhân dân là trung tâm, là chủ thể của công cuộc đổi mới, xây dựng và bảo vệ Tổ quốc; mọi chủ trương phải thực sự xuất phát tự yêu cầu, nguyện vọng, quyền và lợi ích hợp pháp chính đáng của nhân dân” được nêu trong đại hội Đảng lần thứ mấy?$]",
    "clean_text": "Luận điểm: “Nhân dân là trung tâm, là chủ thể của công cuộc đổi mới, xây dựng và bảo vệ Tổ quốc; mọi chủ trương phải thực sự xuất phát tự yêu cầu, nguyện vọng, quyền và lợi ích hợp pháp chính đáng của nhân dân” được nêu trong đại hội Đảng lần thứ mấy?",
    "correct_text": "Lần thứ XIII",
    "distractors": [
      "Lần thứ XII",
      "Lần thứ XI",
      "Lần thứ X"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lần thứ XIII",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lần thứ XII",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lần thứ XI",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Lần thứ X",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 23,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 150,
    "title_raw": "Câu 150.[!b:$ Luận điểm “Đấu tranh, ngăn chặn, đẩy lùi sự suy thoái về tư tưởng, chính trị, đạo đức, lối sống, những biểu hiện “tự diễn biến”, “tự chuyển hóa” trong nội bộ” được nêu trong đại hội Đảng lần thứ mấy?$]",
    "clean_text": "Luận điểm “Đấu tranh, ngăn chặn, đẩy lùi sự suy thoái về tư tưởng, chính trị, đạo đức, lối sống, những biểu hiện “tự diễn biến”, “tự chuyển hóa” trong nội bộ” được nêu trong đại hội Đảng lần thứ mấy?",
    "correct_text": "Lần thứ XIII",
    "distractors": [
      "Lần thứ X",
      "Lần thứ XII",
      "Lần thứ XI"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lần thứ XIII",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lần thứ X",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lần thứ XII",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Lần thứ XI",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 24,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 151,
    "title_raw": "Câu 151.[!b:$ Điền từ thích hợp theo quan điểm đại hội XIII của Đảng: “Tăng cường bảo vệ nền tảng tư tưởng của Đảng, ………. đấu tranh phản các quan điểm sai trái, thù địch, cơ hội chính trị” ?$]",
    "clean_text": "Điền từ thích hợp theo quan điểm đại hội XIII của Đảng: “Tăng cường bảo vệ nền tảng tư tưởng của Đảng, ………. đấu tranh phản các quan điểm sai trái, thù địch, cơ hội chính trị” ?",
    "correct_text": "Kiên quyết và thường xuyên",
    "distractors": [
      "Chủ động",
      "Kết hợp",
      "Nhiệm vụ trước mắt là"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Kiên quyết và thường xuyên",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Chủ động",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Kết hợp",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nhiệm vụ trước mắt là",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 28,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 152,
    "title_raw": "Câu 152.[!b:$ Tiếp thu, phát triển thành tựu nghệ thuật hậu cần - kỹ thuật quân sự rút ra từ tính độc lập tương đối nào của ý thức xã hội:$]",
    "clean_text": "Tiếp thu, phát triển thành tựu nghệ thuật hậu cần - kỹ thuật quân sự rút ra từ tính độc lập tương đối nào của ý thức xã hội:",
    "correct_text": "Từ tính kế thừa của ý thức xã hội",
    "distractors": [
      "Từ tính lạc hậu của ý thức xã hội",
      "Từ tính vượt trước của ý thức xã hội",
      "Từ tính tác động lẫn nhau của ý thức xã hội"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Từ tính kế thừa của ý thức xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Từ tính lạc hậu của ý thức xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Từ tính vượt trước của ý thức xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Từ tính tác động lẫn nhau của ý thức xã hội",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 19,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 153,
    "title_raw": "Câu 153.[!b:$ Bảo vệ nền tảng tư tưởng của Đảng, đấu tranh chống các quan điểm sai trái, thù địch hiện nay được rút ra từ tính độc lập tương đối nào của ý thức xã hội:$]",
    "clean_text": "Bảo vệ nền tảng tư tưởng của Đảng, đấu tranh chống các quan điểm sai trái, thù địch hiện nay được rút ra từ tính độc lập tương đối nào của ý thức xã hội:",
    "correct_text": "Từ tính lạc hậu của ý thức xã hội",
    "distractors": [
      "Từ tính vượt trước của ý thức xã hội",
      "Từ tính kế thừa của ý thức xã hội",
      "Từ tính tác động lẫn nhau của ý thức xã hội"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Từ tính lạc hậu của ý thức xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Từ tính vượt trước của ý thức xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Từ tính kế thừa của ý thức xã hội",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Từ tính tác động lẫn nhau của ý thức xã hội",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 13,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 154,
    "title_raw": "Câu 154.[!b:$ Hoàn thiện câu nói của C. Mác: “Trong mọi thời đại, những tư tưởng của ….. là những tư tưởng thống trị trong xã hội”?$]",
    "clean_text": "Hoàn thiện câu nói của C. Mác: “Trong mọi thời đại, những tư tưởng của ….. là những tư tưởng thống trị trong xã hội”?",
    "correct_text": "Giai cấp thống trị",
    "distractors": [
      "Giai cấp cầm quyền",
      "Nhà nước",
      "Giai cấp thống trị về kinh tế"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Giai cấp thống trị",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Giai cấp cầm quyền",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nhà nước",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Giai cấp thống trị về kinh tế",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 17,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 155,
    "title_raw": "Câu 155.[!b:$ Hiện nay Việt Nam khẳng định đối tác là:$]",
    "clean_text": "Hiện nay Việt Nam khẳng định đối tác là:",
    "correct_text": "Những ai tôn trọng độc lập, chủ quyền, thiết lập và mở rộng quan hệ hữu nghị, hợp tác, bình đẳng, cùng có lợi với Việt Nam",
    "distractors": [
      "Những quốc gia, vùng lãnh thổ, tổ chức phi chính phủ tạo điều kiện thuận lợi cho Việt Nam",
      "Những nước xã hội chủ nghĩa và các nước đang phát triển giúp đỡ Việt Nam",
      "Những tổ chức, cá nhân tôn trọng giúp đỡ Việt Nam"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Những ai tôn trọng độc lập, chủ quyền, thiết lập và mở rộng quan hệ hữu nghị, hợp tác, bình đẳng, cùng có lợi với Việt Nam",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Những quốc gia, vùng lãnh thổ, tổ chức phi chính phủ tạo điều kiện thuận lợi cho Việt Nam",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Những nước xã hội chủ nghĩa và các nước đang phát triển giúp đỡ Việt Nam",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Những tổ chức, cá nhân tôn trọng giúp đỡ Việt Nam",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 10,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 156,
    "title_raw": "Câu 156.[!b:$ Kiến trúc thượng tầng chịu sự quyết định của cơ sở hạ tầng theo cách:$]",
    "clean_text": "Kiến trúc thượng tầng chịu sự quyết định của cơ sở hạ tầng theo cách:",
    "correct_text": "Chủ động",
    "distractors": [
      "Thụ động",
      "Phụ thuộc",
      "Chi phối"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Chủ động",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Thụ động",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Phụ thuộc",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Chi phối",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 4,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 157,
    "title_raw": "Câu 157.[!b:$ Quy luật mâu thuẫn có vị trí như thế nào trong phép biện chứng duy vật:$]",
    "clean_text": "Quy luật mâu thuẫn có vị trí như thế nào trong phép biện chứng duy vật:",
    "correct_text": "Là hạt nhân của phép biện chứng duy vật, vạch ra nguồn gốc, động lực bên trong của sự vận động và phát triển.",
    "distractors": [
      "Vạch ra xu hướng của sự phát triển.",
      "Vạch ra cách thức của sự phát triển.",
      "vạch ra khuynh hướng, cách thức của sự phát triển"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Là hạt nhân của phép biện chứng duy vật, vạch ra nguồn gốc, động lực bên trong của sự vận động và phát triển.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Vạch ra xu hướng của sự phát triển.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Vạch ra cách thức của sự phát triển.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "vạch ra khuynh hướng, cách thức của sự phát triển",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 13,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 158,
    "title_raw": "Câu 158.[!b:$ Trong các quan hệ sau, quan hệ nào giữ vai trò quyết định và chi phối các quan hệ khác:$]",
    "clean_text": "Trong các quan hệ sau, quan hệ nào giữ vai trò quyết định và chi phối các quan hệ khác:",
    "correct_text": "Quan hệ sản xuất",
    "distractors": [
      "Quan hệ giữa người với người trong đời sống xã hội",
      "Quan hệ kinh tế, pháp quyền",
      "Quan hệ chính trị, giai cấp"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quan hệ sản xuất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quan hệ giữa người với người trong đời sống xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quan hệ kinh tế, pháp quyền",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan hệ chính trị, giai cấp",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 16,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 159,
    "title_raw": "Câu 159.[!b:$ Trong hoạt động thực tiễn sai lầm của trì trệ, bảo thủ là do không tôn trọng quy luật nào của phép biện chứng duy vật:$]",
    "clean_text": "Trong hoạt động thực tiễn sai lầm của trì trệ, bảo thủ là do không tôn trọng quy luật nào của phép biện chứng duy vật:",
    "correct_text": "Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
    "distractors": [
      "Quy luật phủ định của phủ định.",
      "Quy luật mâu thuẫn.",
      "Cả 3 quy luật trên"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quy luật phủ định của phủ định.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quy luật mâu thuẫn.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Cả 3 quy luật trên",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 2,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 160,
    "title_raw": "Câu 160.[!b:$ Theo nghĩa đen câu ca dao sau: &lt;br /&gt;“Một cây làm chẳng nên non &lt;br /&gt;Ba cây chụm lại nên hòn núi cao” &lt;br /&gt;Thể hiện nội dung quy luật nào của phép biện chứng duy vật nào?$]",
    "clean_text": "Theo nghĩa đen câu ca dao sau: <br />“Một cây làm chẳng nên non <br />Ba cây chụm lại nên hòn núi cao” <br />Thể hiện nội dung quy luật nào của phép biện chứng duy vật nào?",
    "correct_text": "Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
    "distractors": [
      "Quy luật phủ định của phủ định",
      "Quy luật mâu thuẫn",
      "Cả 3 đáp án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quy luật phủ định của phủ định",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quy luật mâu thuẫn",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Cả 3 đáp án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 9,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 161,
    "title_raw": "Câu 161.[!b:$ Ý thức xã hội tác động trở lại tồn tại xã hội là do:$]",
    "clean_text": "Ý thức xã hội tác động trở lại tồn tại xã hội là do:",
    "correct_text": "Ý thức xã hội nảy sinh từ tồn tại xã hội, thông qua hoạt động thực tiễn của con người.",
    "distractors": [
      "Ý thức xã hội độc lập hoàn toàn với tồn tại xã hội",
      "Ý thức xã hội do thần linh tạo ra",
      "Ý thức xã hội có mục đích riêng của nó"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Ý thức xã hội nảy sinh từ tồn tại xã hội, thông qua hoạt động thực tiễn của con người.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Ý thức xã hội độc lập hoàn toàn với tồn tại xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Ý thức xã hội do thần linh tạo ra",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Ý thức xã hội có mục đích riêng của nó",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 2,
        "correct_letter": "B"
      },
      {
        "test_num": 7,
        "q_num": 4,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 162,
    "title_raw": "Câu 162.[!b:$ Lựa chọn phương án sai về tính độc lập tương đối của ý thức xã hội:$]",
    "clean_text": "Lựa chọn phương án sai về tính độc lập tương đối của ý thức xã hội:",
    "correct_text": "Giải thích một tư tưởng nào đó của ý thức xã hội chỉ cần dựa vào những quan hệ kinh tế hiện có",
    "distractors": [
      "Có bộ phận của ý thức xã hội lạc hậu hơn so với tồn tại xã hội vì không phản ánh kịp hoạt động thực tiễn.",
      "Các loại hình thái ý thức xã hội có quan hệ với nhau và đều tác động trở lại tồn tại xã hội.",
      "Ý thức xã hội tác động trở lại tồn tại xã hội theo hai chiều hoặc thúc đẩy hoặc kìm hãm. Và mức độ tác động đó phụ thuộc vào điều kiện lịch sử cụ thể."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Giải thích một tư tưởng nào đó của ý thức xã hội chỉ cần dựa vào những quan hệ kinh tế hiện có",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Có bộ phận của ý thức xã hội lạc hậu hơn so với tồn tại xã hội vì không phản ánh kịp hoạt động thực tiễn.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Các loại hình thái ý thức xã hội có quan hệ với nhau và đều tác động trở lại tồn tại xã hội.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Ý thức xã hội tác động trở lại tồn tại xã hội theo hai chiều hoặc thúc đẩy hoặc kìm hãm. Và mức độ tác động đó phụ thuộc vào điều kiện lịch sử cụ thể.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 10,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 163,
    "title_raw": "Câu 163.[!b:$ Điền từ thích hợp vào chỗ trống theo quan điểm Đại hội XIII của Đảng: “Phát huy nhân tố con người, lấy nhân dân làm …….; phát huy vai trò của văn hóa - nền tảng tinh thần của xã hội, là mục tiêu, động lực của sự phát triển”?$]",
    "clean_text": "Điền từ thích hợp vào chỗ trống theo quan điểm Đại hội XIII của Đảng: “Phát huy nhân tố con người, lấy nhân dân làm …….; phát huy vai trò của văn hóa - nền tảng tinh thần của xã hội, là mục tiêu, động lực của sự phát triển”?",
    "correct_text": "Trung tâm",
    "distractors": [
      "Nền tảng",
      "Nòng cốt",
      "Hạt nhân"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Trung tâm",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nền tảng",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nòng cốt",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Hạt nhân",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 15,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 164,
    "title_raw": "Câu 164.[!b:$ Luận điểm “Xây dựng con người Việt Nam thời đại mới, gắn kết chặt chẽ, hài hòa giữa giá trị truyền thống và giá trị hiện đại... để con người Việt Nam thực sự là trung tâm của chiến lược phát triển, đồng thời là chủ thể phát triển” được nêu trong Đại hội Đảng lần thứ bao nhiêu?$]",
    "clean_text": "Luận điểm “Xây dựng con người Việt Nam thời đại mới, gắn kết chặt chẽ, hài hòa giữa giá trị truyền thống và giá trị hiện đại... để con người Việt Nam thực sự là trung tâm của chiến lược phát triển, đồng thời là chủ thể phát triển” được nêu trong Đại hội Đảng lần thứ bao nhiêu?",
    "correct_text": "Lần thứ XIII",
    "distractors": [
      "Lần thứ XII",
      "Lần thứ XI",
      "Lần thứ X"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lần thứ XIII",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lần thứ XII",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lần thứ XI",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Lần thứ X",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 15,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 165,
    "title_raw": "Câu 165.[!b:$ Cách hiểu nào sau đây về mục đích cuối cùng của đấu tranh giai cấp trong lịch sử là đúng?$]",
    "clean_text": "Cách hiểu nào sau đây về mục đích cuối cùng của đấu tranh giai cấp trong lịch sử là đúng?",
    "correct_text": "Đấu tranh giai cấp nhằm mục đích cuối cùng là xoá bỏ giai cấp.",
    "distractors": [
      "Đấu tranh giai cấp nhằm thay đổi địa vị lẫn nhau giữa các giai cấp",
      "Đấu tranh giai cấp xét đến cùng là nhằm chiếm lấy quyền lực nhà nước",
      "Đấu tranh giai cấp nhằm thay đổi hiện thực xã hội"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Đấu tranh giai cấp nhằm mục đích cuối cùng là xoá bỏ giai cấp.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Đấu tranh giai cấp nhằm thay đổi địa vị lẫn nhau giữa các giai cấp",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Đấu tranh giai cấp xét đến cùng là nhằm chiếm lấy quyền lực nhà nước",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Đấu tranh giai cấp nhằm thay đổi hiện thực xã hội",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 4,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 166,
    "title_raw": "Câu 166.[!b:$ Đấu tranh giai cấp ở đơn vị cơ sở hiện nay, biểu hiện:$]",
    "clean_text": "Đấu tranh giai cấp ở đơn vị cơ sở hiện nay, biểu hiện:",
    "correct_text": "Tất cả các phương án",
    "distractors": [
      "Đấu tranh chống tư tưởng bảo thủ lạc hậu",
      "Thực hiện xây dựng chính quy, rèn luyện kỷ luật",
      "Không ngừng nâng cao trình độ mội mặt cho cán bộ, chiến sĩ"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Đấu tranh chống tư tưởng bảo thủ lạc hậu",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Thực hiện xây dựng chính quy, rèn luyện kỷ luật",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Không ngừng nâng cao trình độ mội mặt cho cán bộ, chiến sĩ",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 7,
        "q_num": 5,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 167,
    "title_raw": "Câu 167.[!b:$ Phương châm: “Chất lượng đào tạo của nhà trường là khả năng sẵn sàng chiến đấu của đơn vị” là sự vận dụng nguyên tắc nào?$]",
    "clean_text": "Phương châm: “Chất lượng đào tạo của nhà trường là khả năng sẵn sàng chiến đấu của đơn vị” là sự vận dụng nguyên tắc nào?",
    "correct_text": "Thống nhất giữa lý luận với thực tiễn",
    "distractors": [
      "Nguyên tắc toàn diện",
      "Nguyên tắc lịch sử cụ thể",
      "Nguyên tắc khách quan"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Thống nhất giữa lý luận với thực tiễn",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguyên tắc toàn diện",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguyên tắc lịch sử cụ thể",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nguyên tắc khách quan",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 6,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 168,
    "title_raw": "Câu 168.[!b:$ Chọn phương án đúng về bệnh giáo điều:$]",
    "clean_text": "Chọn phương án đúng về bệnh giáo điều:",
    "correct_text": "Quá đề cao lý luận, hạ thấp vai trò của thực tiễn",
    "distractors": [
      "Quá đề cao thực tiễn, hạ thấp vai trò của lý luận",
      "Quá đề cao cá nhân, hạ thấp vai trò của tập thể",
      "Không phương án nào đúng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quá đề cao lý luận, hạ thấp vai trò của thực tiễn",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quá đề cao thực tiễn, hạ thấp vai trò của lý luận",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quá đề cao cá nhân, hạ thấp vai trò của tập thể",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Không phương án nào đúng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 24,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 169,
    "title_raw": "Câu 169.[!b:$ Bệnh kinh nghiệm vi phạm nguyên lý nào:$]",
    "clean_text": "Bệnh kinh nghiệm vi phạm nguyên lý nào:",
    "correct_text": "Nguyên lý thống nhất giữa lý luận với thực tiễn",
    "distractors": [
      "Nguyên lý về sự phát triển",
      "Nguyên lý về mối liên hệ phổ biến",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nguyên lý thống nhất giữa lý luận với thực tiễn",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguyên lý về sự phát triển",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguyên lý về mối liên hệ phổ biến",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 28,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 170,
    "title_raw": "Câu 170.[!b:$ Điền từ thích hợp vào chỗ trống: “……. là nguyên tắc căn bản của chủ nghĩa Mác- Lênin:$]",
    "clean_text": "Điền từ thích hợp vào chỗ trống: “……. là nguyên tắc căn bản của chủ nghĩa Mác- Lênin:",
    "correct_text": "Thống nhất giữa lý luận và thực tiễn",
    "distractors": [
      "Nguyên tắc khách quan",
      "Nguyên tắc toàn diện",
      "Nguyên tắc phát triển"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Thống nhất giữa lý luận và thực tiễn",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguyên tắc khách quan",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguyên tắc toàn diện",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nguyên tắc phát triển",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 14,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 171,
    "title_raw": "Câu 171.[!b:$ Luận điểm sau của C.Mác: “Sự tồn tại của các giai cấp chỉ gắn liền với những giai đoạn phát triển lịch sử nhất định của sản xuất” được hiểu theo nghĩa:$]",
    "clean_text": "Luận điểm sau của C.Mác: “Sự tồn tại của các giai cấp chỉ gắn liền với những giai đoạn phát triển lịch sử nhất định của sản xuất” được hiểu theo nghĩa:",
    "correct_text": "Sự tồn tại giai cấp chỉ gắn liền với các giai đoạn phát triển nhất định của sản xuất. Giai cấp chỉ là một phạm trù lịch sử",
    "distractors": [
      "Sự tồn tại của giai cấp gắn liền với lịch sử của sản xuất.",
      "Giai cấp chỉ là một hiện tượng lịch sử",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Sự tồn tại giai cấp chỉ gắn liền với các giai đoạn phát triển nhất định của sản xuất. Giai cấp chỉ là một phạm trù lịch sử",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Sự tồn tại của giai cấp gắn liền với lịch sử của sản xuất.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Giai cấp chỉ là một hiện tượng lịch sử",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 20,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 172,
    "title_raw": "Câu 172.[!b:$ Bài học kinh nghiệm mà Đảng ta đã rút ra trong công cuộc đổi mới là gì?$]",
    "clean_text": "Bài học kinh nghiệm mà Đảng ta đã rút ra trong công cuộc đổi mới là gì?",
    "correct_text": "Đổi mới kinh tế trước, đổi mới chính trị sau.",
    "distractors": [
      "Đổi mới chính trị trước, đổi mới kinh tế sau.",
      "Cứ đổi mới kinh tế, chính trị sẽ tự nó đổi mới theo.",
      "Không phương án nào đúng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Đổi mới kinh tế trước, đổi mới chính trị sau.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Đổi mới chính trị trước, đổi mới kinh tế sau.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Cứ đổi mới kinh tế, chính trị sẽ tự nó đổi mới theo.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Không phương án nào đúng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 8,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 173,
    "title_raw": "Câu 173.[!b:$ Quốc gia nào sau đây trong lịch sử đã từng phát triển bỏ qua một vài hình thái kinh tế - xã hội:$]",
    "clean_text": "Quốc gia nào sau đây trong lịch sử đã từng phát triển bỏ qua một vài hình thái kinh tế - xã hội:",
    "correct_text": "Hoa Kỳ, Ôtxtrâylia và Việt Nam",
    "distractors": [
      "Nga và Ucraina",
      "Việt Nam, Pháp và Nga",
      "Đức và Italia"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Hoa Kỳ, Ôtxtrâylia và Việt Nam",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nga và Ucraina",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Việt Nam, Pháp và Nga",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Đức và Italia",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 29,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 174,
    "title_raw": "Câu 174.[!b:$ Điều kiện khách quan bỏ qua một hình thái kinh tế - xã hội là gì?$]",
    "clean_text": "Điều kiện khách quan bỏ qua một hình thái kinh tế - xã hội là gì?",
    "correct_text": "Yếu tố thời đại và nền tảng vật chất - kỹ thuật cho sự ra đời của hình thái kinh tế - xã hội mới",
    "distractors": [
      "Sự năng động sáng tạo của các nhà lãnh đạo xã hội",
      "Dựa vào sự phát triển của khoa học",
      "Dựa vào sự giúp đỡ của nước ngoài"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Yếu tố thời đại và nền tảng vật chất - kỹ thuật cho sự ra đời của hình thái kinh tế - xã hội mới",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Sự năng động sáng tạo của các nhà lãnh đạo xã hội",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Dựa vào sự phát triển của khoa học",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Dựa vào sự giúp đỡ của nước ngoài",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 24,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 175,
    "title_raw": "Câu 175.[!b:$ Xuất phát điểm để C.Mác nghiên cứu hình thái kinh tế- xã hội là gì?$]",
    "clean_text": "Xuất phát điểm để C.Mác nghiên cứu hình thái kinh tế- xã hội là gì?",
    "correct_text": "Sản xuất vật chất",
    "distractors": [
      "Sản xuất tinh thần",
      "Lực lượng sản xuất",
      "Quan hệ sản xuất"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Sản xuất vật chất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Sản xuất tinh thần",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lực lượng sản xuất",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Quan hệ sản xuất",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 21,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 176,
    "title_raw": "Câu 176.[!b:$ Luận điểm: “Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên” được C.Mác nêu trong tác phẩm nào?$]",
    "clean_text": "Luận điểm: “Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên” được C.Mác nêu trong tác phẩm nào?",
    "correct_text": "Tư bản",
    "distractors": [
      "Hệ tư tưởng Đức",
      "Lời nói đầu góp phần phê phán khoa kinh tế chính trị",
      "Tuyên ngôn Đảng cộng sản"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tư bản",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Hệ tư tưởng Đức",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lời nói đầu góp phần phê phán khoa kinh tế chính trị",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tuyên ngôn Đảng cộng sản",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 14,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 177,
    "title_raw": "Câu 177.[!b:$ Vai trò tác động trở lại của quan hệ sản xuất với lực lượng sản xuất:$]",
    "clean_text": "Vai trò tác động trở lại của quan hệ sản xuất với lực lượng sản xuất:",
    "correct_text": "Tất cả các phương án",
    "distractors": [
      "Quy định mục đích, tính chất của nền sản xuất",
      "Quy định khuynh hướng phát triển của sản xuất",
      "Hình thành hệ thống động lực thúc đẩy lực lượng sản xuất phát triển"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quy định mục đích, tính chất của nền sản xuất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quy định khuynh hướng phát triển của sản xuất",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Hình thành hệ thống động lực thúc đẩy lực lượng sản xuất phát triển",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 19,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 178,
    "title_raw": "Câu 178.[!b:$ Chọn phương án trả lời chính xác nhất: Tri thức của con người ngày càng hoàn thiện là vì:$]",
    "clean_text": "Chọn phương án trả lời chính xác nhất: Tri thức của con người ngày càng hoàn thiện là vì:",
    "correct_text": "Do khả năng tổng hợp của trí tuệ con người trong thời đại mới",
    "distractors": [
      "Nhờ sự nỗ lực hoạt động thực tiễn của con người",
      "Thế giới đang vận động, bộc lộ càng nhiều tính quy định",
      "Nhờ hệ thống tri thức trước đó làm tiền đề"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Do khả năng tổng hợp của trí tuệ con người trong thời đại mới",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nhờ sự nỗ lực hoạt động thực tiễn của con người",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Thế giới đang vận động, bộc lộ càng nhiều tính quy định",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Nhờ hệ thống tri thức trước đó làm tiền đề",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 9,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 179,
    "title_raw": "Câu 179.[!b:$ Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây sai:$]",
    "clean_text": "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây sai:",
    "correct_text": "Lý luận có thể phát triển không cần thực tiễn.",
    "distractors": [
      "Thực tiễn không có lý luận là thực tiễn mù quáng.",
      "Lý luận không có thực tiễn là lý luận suông",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lý luận có thể phát triển không cần thực tiễn.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Thực tiễn không có lý luận là thực tiễn mù quáng.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lý luận không có thực tiễn là lý luận suông",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 8,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 180,
    "title_raw": "Câu 180.[!b:$ Luận điểm: “Quan điểm về đời sống, về thực tiễn phải là quan điểm thứ nhất và cơ bản của lý luận nhận thức” của ai?$]",
    "clean_text": "Luận điểm: “Quan điểm về đời sống, về thực tiễn phải là quan điểm thứ nhất và cơ bản của lý luận nhận thức” của ai?",
    "correct_text": "V.I.Lênin",
    "distractors": [
      "C.Mác",
      "Ph. Ăngghen",
      "Hồ Chí Minh"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "V.I.Lênin",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "C.Mác",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Ph. Ăngghen",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Hồ Chí Minh",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 27,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 181,
    "title_raw": "Câu 181.[!b:$ Thêm cụm từ thích hợp để hoàn chỉnh định nghĩa: “Thực tiễn là toàn bộ những ........... của con người nhằm cải tạo tự nhiên và xã hội”?$]",
    "clean_text": "Thêm cụm từ thích hợp để hoàn chỉnh định nghĩa: “Thực tiễn là toàn bộ những ........... của con người nhằm cải tạo tự nhiên và xã hội”?",
    "correct_text": "Hoạt động vật chất có mục đích, mang tính lịch sử - xã hội",
    "distractors": [
      "Hoạt động vật chất",
      "Hoạt động có mục đích",
      "Hoạt động."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Hoạt động vật chất có mục đích, mang tính lịch sử - xã hội",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Hoạt động vật chất",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Hoạt động có mục đích",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Hoạt động.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 7,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 182,
    "title_raw": "Câu 182.[!b:$ Nếu trong hoạt động thực tiễn mà không coi trọng lý luận thì sẽ thế nào?$]",
    "clean_text": "Nếu trong hoạt động thực tiễn mà không coi trọng lý luận thì sẽ thế nào?",
    "correct_text": "Rơi vào chủ nghĩa kinh viện giáo điều",
    "distractors": [
      "Rơi vào chủ nghĩa kinh nghiệm hẹp hòi.",
      "Rơi vào ảo tưởng.",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Rơi vào chủ nghĩa kinh viện giáo điều",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Rơi vào chủ nghĩa kinh nghiệm hẹp hòi.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Rơi vào ảo tưởng.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 23,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 183,
    "title_raw": "Câu 183.[!b:$ Chọn phương án sai về đặc trưng của lý luận:$]",
    "clean_text": "Chọn phương án sai về đặc trưng của lý luận:",
    "correct_text": "Lý luận được hình thành từ tri thức kinh nghiệm",
    "distractors": [
      "Lý luận có tính hệ thống, tính khái quát cao, tính lôgic chặt chẽ.",
      "Cơ sở của lý luận là thực tiễn.",
      "Lý luận xét về bản chất có thể phản ánh được bản chất sự vật"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lý luận được hình thành từ tri thức kinh nghiệm",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lý luận có tính hệ thống, tính khái quát cao, tính lôgic chặt chẽ.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Cơ sở của lý luận là thực tiễn.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Lý luận xét về bản chất có thể phản ánh được bản chất sự vật",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 26,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 184,
    "title_raw": "Câu 184.[!b:$ Luận điểm sau đây là của ai và thuộc trường phái nào: “Từ trực quan sinh động đến tư duy trừu tượng và từ tư duy trừu tượng đến thực tiễn, đó là con đường biện chứng của sự nhận thức chân lý, nhận thức thực tại khách quan”?$]",
    "clean_text": "Luận điểm sau đây là của ai và thuộc trường phái nào: “Từ trực quan sinh động đến tư duy trừu tượng và từ tư duy trừu tượng đến thực tiễn, đó là con đường biện chứng của sự nhận thức chân lý, nhận thức thực tại khách quan”?",
    "correct_text": "Lênin; chủ nghĩa duy vật biện chứng",
    "distractors": [
      "Phoi-ơ-bắc; chủ nghĩa duy vật siêu hình.",
      "Hêgghen; chủ nghĩa duy tâm khách quan.",
      "Hêraclit; chủ nghĩa duy vật mộc mạc"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lênin; chủ nghĩa duy vật biện chứng",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Phoi-ơ-bắc; chủ nghĩa duy vật siêu hình.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Hêgghen; chủ nghĩa duy tâm khách quan.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Hêraclit; chủ nghĩa duy vật mộc mạc",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 5,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 185,
    "title_raw": "Câu 185.[!b:$ Quan điểm toàn diện, quan điểm phát triển, quan điểm lịch sử - cụ thể là những nguyên tắc phương pháp luận được rút ra từ nội dung nào của triết học Mác - Lênin:$]",
    "clean_text": "Quan điểm toàn diện, quan điểm phát triển, quan điểm lịch sử - cụ thể là những nguyên tắc phương pháp luận được rút ra từ nội dung nào của triết học Mác - Lênin:",
    "correct_text": "Từ nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển",
    "distractors": [
      "Từ nguyên lý thống nhất giữa lý luận và thực tiễn",
      "Từ 3 quy luật của phép biện chứng duy vật",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Từ nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Từ nguyên lý thống nhất giữa lý luận và thực tiễn",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Từ 3 quy luật của phép biện chứng duy vật",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 17,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 186,
    "title_raw": "Câu 186.[!b:$ Chọn phương án trả lời chính xác nhất:$]",
    "clean_text": "Chọn phương án trả lời chính xác nhất:",
    "correct_text": "Phủ định biện chứng có khuynh hướng phổ biến trong sự phát triển của sự vật, hiện tượng",
    "distractors": [
      "Phủ định biện chứng là phổ biến ở mọi sự vật, hiện tượng",
      "Phủ định biện chứng là chỉ phổ biến trong tư duy",
      "Phủ định biện chứng là chỉ hình thành trong các quy luật toán học."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Phủ định biện chứng có khuynh hướng phổ biến trong sự phát triển của sự vật, hiện tượng",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Phủ định biện chứng là phổ biến ở mọi sự vật, hiện tượng",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Phủ định biện chứng là chỉ phổ biến trong tư duy",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Phủ định biện chứng là chỉ hình thành trong các quy luật toán học.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 30,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 187,
    "title_raw": "Câu 187.[!b:$ Cơ sở khoa học của quan điểm “xây dựng QĐND, Công an nhân dân cách mạng, chính quy, tinh nhuệ, từng bước hiện đại, một số quân chủng, binh chủng, lực lượng tiến thẳng lên hiện đại. Đến năm 2025 cơ bản xây dựng Quân đội, Công an tinh, gọn, mạnh tạo tiền đề vững chắc, phấn đấu năm 2030 xây dựng QĐND, CAND cách mạng, chính quy, hiện đại; vững mạnh về chính trị, tư tưởng, đạo đức tổ chức và cán bộ”:$]",
    "clean_text": "Cơ sở khoa học của quan điểm “xây dựng QĐND, Công an nhân dân cách mạng, chính quy, tinh nhuệ, từng bước hiện đại, một số quân chủng, binh chủng, lực lượng tiến thẳng lên hiện đại. Đến năm 2025 cơ bản xây dựng Quân đội, Công an tinh, gọn, mạnh tạo tiền đề vững chắc, phấn đấu năm 2030 xây dựng QĐND, CAND cách mạng, chính quy, hiện đại; vững mạnh về chính trị, tư tưởng, đạo đức tổ chức và cán bộ”:",
    "correct_text": "Quy luật lượng - chất",
    "distractors": [
      "Quy luật mâu thuẫn",
      "Quy luật phủ định của phủ định",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quy luật lượng - chất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quy luật mâu thuẫn",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quy luật phủ định của phủ định",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 25,
        "correct_letter": "D"
      },
      {
        "test_num": 7,
        "q_num": 7,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 188,
    "title_raw": "Câu 188.[!b:$ Cơ sở lý luận của tính quy luật giành thắng lợi từng bước tiến lên giành thắng lợi hoàn toàn trong chiến tranh nhân dân Việt Nam:$]",
    "clean_text": "Cơ sở lý luận của tính quy luật giành thắng lợi từng bước tiến lên giành thắng lợi hoàn toàn trong chiến tranh nhân dân Việt Nam:",
    "correct_text": "Quy luật lượng - chất",
    "distractors": [
      "Quy luật phủ định của phủ định",
      "Quy luật mâu thuẫn",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quy luật lượng - chất",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quy luật phủ định của phủ định",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quy luật mâu thuẫn",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 20,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 189,
    "title_raw": "Câu 189.[!b:$ Cơ sở khoa học để Đảng ta nhận thức những vấn đề mâu thuẫn trên thế giới và trong nước hiện nay:$]",
    "clean_text": "Cơ sở khoa học để Đảng ta nhận thức những vấn đề mâu thuẫn trên thế giới và trong nước hiện nay:",
    "correct_text": "Quy luật thống nhất và đấu tranh của các mặt đối lập",
    "distractors": [
      "Quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại",
      "Quy luật phủ định của phủ định",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quy luật thống nhất và đấu tranh của các mặt đối lập",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Quy luật từ sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Quy luật phủ định của phủ định",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 4,
        "q_num": 16,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 190,
    "title_raw": "Câu 190.[!b:$ Chọn phương án trả lời sai:$]",
    "clean_text": "Chọn phương án trả lời sai:",
    "correct_text": "Con người có thể phản ánh đúng đắn thế giới khách quan không cần thông qua lao động.",
    "distractors": [
      "Ý thức với tư cách là hoạt động phản ánh sáng tạo không thể có được ở bên ngoài quá trình con người lao động làm biến đổi thế giới xung quanh.",
      "Lao động là điều kiện đầu tiên và chủ yếu để con người tồn tại.",
      "Lao động không xuất hiện ở trạng thái đơn nhất, ngay từ đầu nó đã mang tính tập thể xã hội."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Con người có thể phản ánh đúng đắn thế giới khách quan không cần thông qua lao động.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Ý thức với tư cách là hoạt động phản ánh sáng tạo không thể có được ở bên ngoài quá trình con người lao động làm biến đổi thế giới xung quanh.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lao động là điều kiện đầu tiên và chủ yếu để con người tồn tại.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Lao động không xuất hiện ở trạng thái đơn nhất, ngay từ đầu nó đã mang tính tập thể xã hội.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 17,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 191,
    "title_raw": "Câu 191.[!b:$ Quan điểm của Đảng ta: “Thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển, đa dạng hóa, đa phương hóa quan hệ đối ngoại” xuất phát từ cơ sở lý luận nào?$]",
    "clean_text": "Quan điểm của Đảng ta: “Thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển, đa dạng hóa, đa phương hóa quan hệ đối ngoại” xuất phát từ cơ sở lý luận nào?",
    "correct_text": "Nguyên lý về mối liên hệ phổ biến",
    "distractors": [
      "Nguyên lý thống nhất giữa lý luận với thực tiễn",
      "Nguyên lý về sự phát triển",
      "Tất cả các phương án"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Nguyên lý về mối liên hệ phổ biến",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Nguyên lý thống nhất giữa lý luận với thực tiễn",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Nguyên lý về sự phát triển",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Tất cả các phương án",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 11,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 192,
    "title_raw": "Câu 192.[!b:$ Lựa chọn câu đúng theo quan điểm của chủ nghĩa duy vật biện chứng:$]",
    "clean_text": "Lựa chọn câu đúng theo quan điểm của chủ nghĩa duy vật biện chứng:",
    "correct_text": "Mối liên hệ của sự vật, hiện tượng không chỉ diễn ra giữa các sự vật, hiện tượng mà còn diễn ra ngay trong sự sự vật, hiện tượng",
    "distractors": [
      "Mối liên hệ chỉ diễn ra giữa các sự sự vật, hiện tượng với nhau còn trong bản thân sự sự vật, hiện tượng không có sự liên hệ.",
      "Mối liên hệ của sự sự vật, hiện tượng chỉ do ý chí con người tạo ra còn bản thân sự sự vật, hiện tượng không có sự liên hệ.",
      "Mối liên giữa các sự vật, hiện tượng là có thật, còn mối liên hệ trong tư duy con người chỉ là do con người tưởng tượng ra"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Mối liên hệ của sự vật, hiện tượng không chỉ diễn ra giữa các sự vật, hiện tượng mà còn diễn ra ngay trong sự sự vật, hiện tượng",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Mối liên hệ chỉ diễn ra giữa các sự sự vật, hiện tượng với nhau còn trong bản thân sự sự vật, hiện tượng không có sự liên hệ.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Mối liên hệ của sự sự vật, hiện tượng chỉ do ý chí con người tạo ra còn bản thân sự sự vật, hiện tượng không có sự liên hệ.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Mối liên giữa các sự vật, hiện tượng là có thật, còn mối liên hệ trong tư duy con người chỉ là do con người tưởng tượng ra",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 30,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 193,
    "title_raw": "Câu 193.[!b:$ Quan điểm của chủ nghĩa duy vật biện chứng về nguồn gốc mối liên hệ giữa các sự vật, hiện tượng:$]",
    "clean_text": "Quan điểm của chủ nghĩa duy vật biện chứng về nguồn gốc mối liên hệ giữa các sự vật, hiện tượng:",
    "correct_text": "Do tính thống nhất vật chất của thế giới.",
    "distractors": [
      "Do lực lượng siêu nhiên (thượng đế, ý niệm) sinh ra.",
      "Do cảm giác thói quen của con người tạo ra.",
      "Do tư duy con người tạo ra rồi đưa vào tự nhiên và xã hội."
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Do tính thống nhất vật chất của thế giới.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Do lực lượng siêu nhiên (thượng đế, ý niệm) sinh ra.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Do cảm giác thói quen của con người tạo ra.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Do tư duy con người tạo ra rồi đưa vào tự nhiên và xã hội.",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 1,
        "q_num": 1,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 194,
    "title_raw": "Câu 194.[!b:$ Phép biện chứng duy vật là gì?$]",
    "clean_text": "Phép biện chứng duy vật là gì?",
    "correct_text": "Là khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, của xã hội loài người và của tư duy.",
    "distractors": [
      "Là khoa học nghiên cứu về sự vận động, phát triển của các sự sự vật, hiện tượng trong tự nhiên, xã hội và tư duy.",
      "Là khoa học nghiên cứu về mối liên hệ phổ biến và về sự phát triển của sự sự vật, hiện tượng trong tự nhiên.",
      "Là khoa học nghiên cứu về sự phát triển của các sự vật, hiện tượng xung quanh chúng ta"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Là khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, của xã hội loài người và của tư duy.",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Là khoa học nghiên cứu về sự vận động, phát triển của các sự sự vật, hiện tượng trong tự nhiên, xã hội và tư duy.",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Là khoa học nghiên cứu về mối liên hệ phổ biến và về sự phát triển của sự sự vật, hiện tượng trong tự nhiên.",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Là khoa học nghiên cứu về sự phát triển của các sự vật, hiện tượng xung quanh chúng ta",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 12,
        "correct_letter": "A"
      }
    ]
  },
  {
    "orig_id": 195,
    "title_raw": "Câu 195.[!b:$ Mối quan hệ giữa mặt khách quan và mặt chủ quan của tiến trình lịch sử nhân loại đã được C.Mác đặt ra và giải quyết bằng những cặp phạm trù nào sau đây:$]",
    "clean_text": "Mối quan hệ giữa mặt khách quan và mặt chủ quan của tiến trình lịch sử nhân loại đã được C.Mác đặt ra và giải quyết bằng những cặp phạm trù nào sau đây:",
    "correct_text": "Tồn tại xã hội và ý thức xã hội, tất yếu và tự do, điều kiện khách quan và nhân tố chủ quan, hoạt động tự giác và hoạt động tự phát trong sự phát triển lịch sử",
    "distractors": [
      "Tồn tại xã hội và ý thức xã hội, tất yếu và tự do, điều kiện khách quan và nhân tố chủ quan",
      "Hoạt động tự giác và hoạt động tự phát trong sự phát triển lịch sử",
      "Cá nhân và xã hội; dân tộc và nhân loại"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tồn tại xã hội và ý thức xã hội, tất yếu và tự do, điều kiện khách quan và nhân tố chủ quan, hoạt động tự giác và hoạt động tự phát trong sự phát triển lịch sử",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tồn tại xã hội và ý thức xã hội, tất yếu và tự do, điều kiện khách quan và nhân tố chủ quan",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Hoạt động tự giác và hoạt động tự phát trong sự phát triển lịch sử",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Cá nhân và xã hội; dân tộc và nhân loại",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 9,
        "correct_letter": "C"
      }
    ]
  },
  {
    "orig_id": 196,
    "title_raw": "Câu 196.[!b:$ Luận điểm: “Kiên định và không ngừng vận dụng, phát triển sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh phù hợp với thực tiễn Việt Nam trong từng giai đoạn” được nêu ở Đại hội Đảng lần thứ bao nhiêu?$]",
    "clean_text": "Luận điểm: “Kiên định và không ngừng vận dụng, phát triển sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh phù hợp với thực tiễn Việt Nam trong từng giai đoạn” được nêu ở Đại hội Đảng lần thứ bao nhiêu?",
    "correct_text": "Lần thứ XIII",
    "distractors": [
      "Lần thứ XII",
      "Lần thứ XI",
      "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (2011)"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Lần thứ XIII",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Lần thứ XII",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Lần thứ XI",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (2011)",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 5,
        "q_num": 15,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 197,
    "title_raw": "Câu 197.[!b:$ Luận điểm: “Thế giới không thoả mãn con người và con người quyết định biến đổi thế giới bằng hành động của mình” của ai?$]",
    "clean_text": "Luận điểm: “Thế giới không thoả mãn con người và con người quyết định biến đổi thế giới bằng hành động của mình” của ai?",
    "correct_text": "V.I.Lênin",
    "distractors": [
      "Hồ Chí Minh",
      "C.Mác",
      "Ph. Ăngghen"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "V.I.Lênin",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Hồ Chí Minh",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "C.Mác",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Ph. Ăngghen",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 6,
        "q_num": 16,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 198,
    "title_raw": "Câu 198.[!b:$ Chọn phương án đúng: Biểu hiện của mối quan hệ khách quan - chủ quan trong lĩnh vực quân sự:$]",
    "clean_text": "Chọn phương án đúng: Biểu hiện của mối quan hệ khách quan - chủ quan trong lĩnh vực quân sự:",
    "correct_text": "Tất cả các phương án",
    "distractors": [
      "Mối quan hệ giữa tính năng động chủ quan của các chủ thể với điều kiện, hoàn cảnh chiến trường",
      "Mối quan hệ giữa tính năng động chủ quan của các chủ thể quân sự với hệ thống các quy luật đặc biệt",
      "Mối quan hệ đối địch về tính năng động chủ quan của hai bên tham chiến"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tất cả các phương án",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Mối quan hệ giữa tính năng động chủ quan của các chủ thể với điều kiện, hoàn cảnh chiến trường",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Mối quan hệ giữa tính năng động chủ quan của các chủ thể quân sự với hệ thống các quy luật đặc biệt",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Mối quan hệ đối địch về tính năng động chủ quan của hai bên tham chiến",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 29,
        "correct_letter": "D"
      }
    ]
  },
  {
    "orig_id": 199,
    "title_raw": "Câu 199.[!b:$ Yếu tố quan trọng nhất của khái niệm chủ quan:$]",
    "clean_text": "Yếu tố quan trọng nhất của khái niệm chủ quan:",
    "correct_text": "Tri thức",
    "distractors": [
      "Tình cảm",
      "Ý chí",
      "Động cơ"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Tri thức",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Tình cảm",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Ý chí",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Động cơ",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 3,
        "q_num": 5,
        "correct_letter": "B"
      }
    ]
  },
  {
    "orig_id": 200,
    "title_raw": "Câu 200.[!b:$ Yếu tố quan trọng nhất của khái niệm khách quan:$]",
    "clean_text": "Yếu tố quan trọng nhất của khái niệm khách quan:",
    "correct_text": "Quy luật khách quan",
    "distractors": [
      "Khả năng khách quan",
      "Điều kiện khách quan",
      "Không phương án nào đúng"
    ],
    "original_options": [
      {
        "letter": "A",
        "text": "Quy luật khách quan",
        "is_correct": true
      },
      {
        "letter": "B",
        "text": "Khả năng khách quan",
        "is_correct": false
      },
      {
        "letter": "C",
        "text": "Điều kiện khách quan",
        "is_correct": false
      },
      {
        "letter": "D",
        "text": "Không phương án nào đúng",
        "is_correct": false
      }
    ],
    "appearances": [
      {
        "test_num": 2,
        "q_num": 3,
        "correct_letter": "C"
      }
    ]
  }
];
