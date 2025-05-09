-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2025 at 03:11 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dda_users`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `name` varchar(255) NOT NULL,
  `id` bigint(20) UNSIGNED NOT NULL,
  `national_id` bigint(20) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `id`, `national_id`, `age`) VALUES
('User 1', 113, 2147483647, 31),
('User 1', 124, 11527610778442, 56),
('User 1', 125, 10536659099065, 55),
('User 1', 126, 13341034986902, 32),
('User 1', 127, 10249573274137, 47),
('User 1', 128, 12761221177964, 42),
('User 1', 129, 12438316631682, 55),
('User 1', 130, 16485688704844, 57),
('User 1', 131, 16151107188451, 51),
('User 1', 132, 11115973701863, 37),
('User 1', 133, 14550683356626, 24),
('User 1', 134, 10551509702119, 49),
('User 1', 135, 16870533099956, 53),
('User 1', 136, 18682739871611, 57),
('User 2', 137, 15612340792533, 55),
('User 3', 138, 12300089038291, 59),
('User 4', 139, 11199048468844, 36),
('User 5', 140, 11590686432976, 54),
('User 6', 141, 18299023508599, 22),
('User 7', 142, 17029758039199, 31),
('User 8', 143, 17701103418445, 24),
('User 9', 144, 18837539796291, 29),
('User 10', 145, 18949026529325, 34),
('User 1', 146, 15294916593087, 30),
('User 2', 147, 13564079345822, 27),
('User 3', 148, 11687430384465, 36),
('User 4', 149, 10388002386926, 59),
('User 5', 150, 10799243150656, 35),
('User 6', 151, 10447895408476, 29),
('User 7', 152, 18218974564682, 33),
('User 8', 153, 17785634044531, 45),
('User 9', 154, 12299303582413, 32),
('User 10', 155, 18087781966540, 50),
('User 1', 156, 13105110560170, 55),
('User 2', 157, 12744621975508, 39),
('User 3', 158, 14626449001707, 44),
('User 4', 159, 16932749832159, 21),
('User 5', 160, 18797034655201, 51),
('User 6', 161, 12863603839400, 46),
('User 7', 162, 16683734020523, 48),
('User 8', 163, 12790224663081, 52),
('User 9', 164, 12213651896758, 35),
('User 10', 165, 13256567403674, 36);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
