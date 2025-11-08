# Tadu Crawler API

API Flask crawl truyện từ tadu.com, deploy trên Render.com

## Endpoints
- `GET /crawl?page=1&num_chapters=5`

## Deploy trên Render
- Đã cấu hình `render.yaml` và `requirements.txt`
- Playwright sẽ tự động cài đặt Chromium khi build

## Lưu ý
- Thư mục lưu ảnh: `../wp-content/uploads/{year}/{month}`
- Đảm bảo quyền ghi cho thư mục uploads
