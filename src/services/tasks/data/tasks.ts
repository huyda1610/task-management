import { TaskOutputDto } from "../models/output.model";

export const tasksData: TaskOutputDto[] = [
  {
    id: "b97b8d56-6f3b-4726-a9ac-bd8d34a89f0d",
    title: "Phát triển Tính Năng Mới",
    description: "Phát triển một tính năng mới để cải thiện trải nghiệm người dùng",
    assignedTo: {
      id: "77f28b22-e0b4-4042-bb87-18efea393d4d",
      name: "Nguyễn Văn A",
      email: "nguyen.a@example.com",
    },
    status: 2,
    createDate: "2025-03-01T10:00:00Z",
    endDate: "2025-03-15T17:00:00Z",
    code: "T-12345678",
    subTask: [
      {
        id: "d2152f94-6b35-4f95-bc3b-c2f8cba45ab6",
        title: "Thiết kế Giao Diện Người Dùng cho Tính Năng Mới",
        status: 3,
        endDate: "2025-03-05T17:00:00Z",
      },
      {
        id: "93a015c8-8b64-4579-94cc-22b474024f27",
        title: "Triển khai Backend cho Tính Năng Mới",
        status: 2,
        endDate: "2025-03-10T17:00:00Z",
      },
      {
        id: "7a80e91f-0d99-47f4-9ba4-5f864b53c473",
        title: "Kiểm Tra Tính Năng Mới",
        status: 1,
        endDate: "2025-03-12T17:00:00Z",
      },
    ],
  },
  {
    id: "e12a9e8b-e19e-4d36-827f-cd30239b7f26",
    title: "Sửa Lỗi Hệ Thống Đăng Nhập",
    description: "Khắc phục lỗi hệ thống đăng nhập cho người dùng",
    assignedTo: {
      id: "a984273b-d10f-4622-b173-0ff97f17421b",
      name: "Trần Thị B",
      email: "tran.b@example.com",
    },
    status: 2,
    createDate: "2025-03-02T09:00:00Z",
    endDate: "2025-03-10T17:00:00Z",
    code: "T-23456789",
    subTask: [
      {
        id: "072473f4-cbbb-4b74-8b91-baf71b68d720",
        title: "Xác định nguyên nhân lỗi đăng nhập",
        status: 3,
        endDate: "2025-03-03T17:00:00Z",
      },
      {
        id: "30706d57-93f2-44a6-90b0-b1984325744b",
        title: "Cập nhật mã nguồn và sửa lỗi",
        status: 2,
        endDate: "2025-03-08T17:00:00Z",
      },
      {
        id: "ecb7c214-5a9c-41f4-9c1e-df8bb9a2a1f9",
        title: "Kiểm tra và triển khai trên môi trường sản xuất",
        status: 1,
        endDate: "2025-03-10T17:00:00Z",
      },
    ],
  },
  {
    id: "f907e6e7-9fd8-4875-b8e7-4d29b3a37062",
    title: "Cải thiện hiệu suất hệ thống",
    description: "Tối ưu hóa và cải thiện hiệu suất tổng thể của hệ thống",
    assignedTo: {
      id: "76cfb5e4-e62b-4cd5-bc28-47796b74c23d",
      name: "Phan Văn C",
      email: "phan.c@example.com",
    },
    status: 2,
    createDate: "2025-03-03T08:30:00Z",
    endDate: "2025-03-12T18:00:00Z",
    code: "T-34567890",
    subTask: [
      {
        id: "3d29e7d2-bb59-4a97-a31a-204a29f93ad1",
        title: "Phân tích và xác định các điểm nghẽn hiệu suất",
        status: 3,
        endDate: "2025-03-04T18:00:00Z",
      },
      {
        id: "8c7f5d69-8e34-48cf-bf9c-0ff7b6bdbf3e",
        title: "Tối ưu hóa cơ sở dữ liệu",
        status: 2,
        endDate: "2025-03-08T18:00:00Z",
      },
      {
        id: "9e15b6ed-e499-4727-a4b4-5de3fa4f7e5c",
        title: "Cập nhật và tối ưu mã nguồn",
        status: 1,
        endDate: "2025-03-12T18:00:00Z",
      },
    ],
  },
  {
    id: "b9e6f699-fda4-4d85-bb07-66c209d71c52",
    title: "Thiết kế lại giao diện người dùng",
    description: "Thiết kế lại giao diện người dùng cho trang chủ",
    assignedTo: {
      id: "d982876b-5f70-42f2-a073-bf6ea3cc5399",
      name: "Lê Minh D",
      email: "le.d@example.com",
    },
    status: 2,
    createDate: "2025-03-04T11:00:00Z",
    endDate: "2025-03-20T17:00:00Z",
    code: "T-45678901",
    subTask: [
      {
        id: "d9514c38-5b5a-4c4c-92b5-b390dcbd7713",
        title: "Thiết kế mockup giao diện mới",
        status: 3,
        endDate: "2025-03-06T17:00:00Z",
      },
      {
        id: "9d3ec4b2-5e62-49a9-bd44-6017d6ac26d2",
        title: "Cập nhật CSS và các yếu tố giao diện",
        status: 2,
        endDate: "2025-03-12T17:00:00Z",
      },
      {
        id: "177fb421-cac8-4456-bd4a-3b78c742bfa3",
        title: "Kiểm tra và sửa lỗi giao diện trên di động",
        status: 1,
        endDate: "2025-03-18T17:00:00Z",
      },
    ],
  },
];
