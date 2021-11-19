DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE departments (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER UNSIGNED REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE employees (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER UNSIGNED REFERENCES roles(id) ON DELETE CASCADE,
        -- employee gets removed if role doesn't exist
    manager_id INTEGER UNSIGNED REFERENCES employees(id) ON DELETE SET NULL
        -- if manager is deleted from employees table, employee's manager is set to null
);