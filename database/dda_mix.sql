-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2025 at 03:10 PM
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
-- Database: `dda_mix`
--

-- --------------------------------------------------------

--
-- Table structure for table `credits_used`
--

CREATE TABLE `credits_used` (
  `national_id` bigint(20) NOT NULL,
  `used_credit` int(11) NOT NULL,
  `total_credit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `credits_used`
--

INSERT INTO `credits_used` (`national_id`, `used_credit`, `total_credit`) VALUES
(2147483647, 5, 5),
(12213651896758, 2, 5),
(12744621975508, 2, 5),
(12790224663081, 4, 5),
(12863603839400, 3, 5),
(13105110560170, 1, 5),
(13256567403674, 2, 5),
(14626449001707, 3, 5),
(16683734020523, 4, 5),
(16932749832159, 5, 5),
(18797034655201, 5, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `credits_used`
--
ALTER TABLE `credits_used`
  ADD PRIMARY KEY (`national_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
