CREATE DATABASE library_management;

USE library_management;

CREATE TABLE Members (
    member_id INT PRIMARY KEY,
    member_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15) UNIQUE,
    join_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'Active',
    CHECK (status IN ('Active', 'Inactive'))
);

INSERT INTO Members
(member_id, member_name, email, phone, join_date, status)
VALUES
(1, 'Rahul Sharma', 'rahul@gmail.com', '9876543210', '2024-01-10', 'Active'),
(2, 'Priya Singh', 'priya@gmail.com', '9876543211', '2024-02-15', 'Active'),
(3, 'Arjun Kumar', 'arjun@gmail.com', '9876543212', '2024-03-20', 'Active'),
(4, 'Sneha Reddy', 'sneha@gmail.com', '9876543213', '2024-04-05', 'Active'),
(5, 'Vikram Rao', 'vikram@gmail.com', '9876543214', '2024-05-12', 'Active'),
(6, 'Ananya Patel', 'ananya@gmail.com', '9876543215', '2024-06-18', 'Active'),
(7, 'Kiran Das', 'kiran@gmail.com', '9876543216', '2024-07-25', 'Inactive'),
(8, 'Neha Joshi', 'neha@gmail.com', '9876543217', '2024-08-10', 'Active');

