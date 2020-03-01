-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.37-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for bulgarian_team
CREATE DATABASE IF NOT EXISTS `bulgarian_team` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `bulgarian_team`;

-- Dumping structure for table bulgarian_team.direction
CREATE TABLE IF NOT EXISTS `direction` (
  `id` int(10) unsigned NOT NULL,
  `direction` double(10,2) unsigned NOT NULL DEFAULT '0.00',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table bulgarian_team.direction: ~0 rows (approximately)
/*!40000 ALTER TABLE `direction` DISABLE KEYS */;
INSERT INTO `direction` (`id`, `direction`, `timestamp`) VALUES
	(1, 180.00, '2020-02-29 17:24:44'),
	(2, 180.00, '2020-02-29 17:24:47'),
	(3, 180.00, '2020-02-29 17:24:50'),
	(4, 180.00, '2020-02-29 17:24:53'),
	(5, 180.00, '2020-02-29 17:24:56'),
	(6, 180.00, '2020-02-29 17:24:59'),
	(7, 180.00, '2020-02-29 17:25:02'),
	(8, 180.00, '2020-02-29 17:25:05'),
	(9, 180.00, '2020-02-29 17:25:08'),
	(10, 180.00, '2020-02-29 17:25:11'),
	(11, 180.00, '2020-02-29 17:25:14'),
	(12, 180.00, '2020-02-29 17:25:17'),
	(13, 180.00, '2020-02-29 17:25:20'),
	(14, 180.00, '2020-02-29 17:25:23'),
	(15, 180.00, '2020-02-29 17:25:26'),
	(16, 180.00, '2020-02-29 17:25:29'),
	(17, 180.00, '2020-02-29 17:25:32'),
	(18, 180.00, '2020-02-29 17:25:35'),
	(19, 180.00, '2020-02-29 17:25:38'),
	(20, 180.00, '2020-02-29 17:25:41'),
	(21, 180.00, '2020-02-29 17:25:44'),
	(22, 180.00, '2020-02-29 17:25:47'),
	(23, 180.00, '2020-02-29 17:25:50'),
	(24, 180.00, '2020-02-29 17:25:53'),
	(25, 180.00, '2020-02-29 17:25:57'),
	(26, 180.00, '2020-02-29 17:26:00'),
	(27, 180.00, '2020-02-29 17:26:03'),
	(28, 180.00, '2020-02-29 17:26:06'),
	(29, 180.00, '2020-02-29 17:26:09'),
	(30, 180.00, '2020-02-29 17:26:12'),
	(31, 180.00, '2020-02-29 17:26:15'),
	(32, 180.00, '2020-02-29 17:26:18'),
	(33, 180.00, '2020-02-29 17:26:21'),
	(34, 180.00, '2020-02-29 17:26:24'),
	(35, 180.00, '2020-02-29 17:26:27'),
	(36, 180.00, '2020-02-29 17:26:30'),
	(37, 180.00, '2020-02-29 17:26:33'),
	(38, 180.00, '2020-02-29 17:26:36'),
	(39, 180.00, '2020-02-29 17:26:39'),
	(40, 180.00, '2020-02-29 17:26:42'),
	(41, 180.00, '2020-02-29 17:26:45'),
	(42, 180.00, '2020-02-29 17:26:48'),
	(43, 180.00, '2020-02-29 17:26:51'),
	(44, 180.00, '2020-02-29 17:26:54'),
	(45, 180.00, '2020-02-29 17:26:57'),
	(46, 180.00, '2020-02-29 17:27:00'),
	(47, 180.00, '2020-02-29 17:27:03'),
	(48, 180.00, '2020-02-29 17:27:06'),
	(49, 180.00, '2020-02-29 17:27:09'),
	(50, 180.00, '2020-02-29 17:27:12'),
	(51, 180.00, '2020-02-29 17:27:15'),
	(52, 180.00, '2020-02-29 17:27:18'),
	(53, 180.00, '2020-02-29 17:27:21'),
	(54, 180.00, '2020-02-29 17:27:24'),
	(55, 180.00, '2020-02-29 17:27:27'),
	(56, 180.00, '2020-02-29 17:27:30'),
	(57, 180.00, '2020-02-29 17:27:33'),
	(58, 180.00, '2020-02-29 17:27:36'),
	(59, 180.00, '2020-02-29 17:27:39'),
	(60, 180.00, '2020-02-29 17:27:42'),
	(61, 180.00, '2020-02-29 17:27:45'),
	(62, 180.00, '2020-02-29 17:27:48'),
	(63, 180.00, '2020-02-29 17:27:51'),
	(64, 180.00, '2020-02-29 17:27:54'),
	(65, 180.00, '2020-02-29 17:27:57'),
	(66, 180.00, '2020-02-29 17:28:00'),
	(67, 180.00, '2020-02-29 17:28:03'),
	(68, 180.00, '2020-02-29 17:28:06'),
	(69, 180.00, '2020-02-29 17:28:09'),
	(70, 180.00, '2020-02-29 17:28:12'),
	(71, 180.00, '2020-02-29 17:28:15'),
	(72, 180.00, '2020-02-29 17:28:18'),
	(73, 180.00, '2020-02-29 17:28:21'),
	(74, 180.00, '2020-02-29 17:28:24'),
	(75, 180.00, '2020-02-29 17:28:27'),
	(76, 180.00, '2020-02-29 17:28:30'),
	(77, 180.00, '2020-02-29 17:28:33'),
	(78, 180.00, '2020-02-29 17:28:36'),
	(79, 180.00, '2020-02-29 17:28:39'),
	(80, 180.00, '2020-02-29 17:28:42'),
	(81, 180.00, '2020-02-29 17:28:45'),
	(82, 180.00, '2020-02-29 17:28:48'),
	(83, 180.00, '2020-02-29 17:28:51'),
	(84, 180.00, '2020-02-29 17:28:54'),
	(85, 180.00, '2020-02-29 17:28:57'),
	(86, 180.00, '2020-02-29 17:29:00'),
	(87, 180.00, '2020-02-29 17:29:03'),
	(88, 180.00, '2020-02-29 17:29:06'),
	(89, 180.00, '2020-02-29 17:29:09'),
	(90, 180.00, '2020-02-29 17:29:12'),
	(91, 180.00, '2020-02-29 17:29:15'),
	(92, 180.00, '2020-02-29 17:29:18'),
	(93, 180.00, '2020-02-29 17:29:21'),
	(94, 180.00, '2020-02-29 17:29:24'),
	(95, 180.00, '2020-02-29 17:29:27'),
	(96, 180.00, '2020-02-29 17:29:30'),
	(97, 180.00, '2020-02-29 17:29:33'),
	(98, 180.00, '2020-02-29 17:29:36'),
	(99, 180.00, '2020-02-29 17:29:39'),
	(100, 180.00, '2020-02-29 17:29:42'),
	(101, 180.00, '2020-02-29 17:29:45'),
	(102, 180.00, '2020-02-29 17:29:48'),
	(103, 180.00, '2020-02-29 17:29:51'),
	(104, 180.00, '2020-02-29 17:29:54'),
	(105, 180.00, '2020-02-29 17:29:57'),
	(106, 180.00, '2020-02-29 17:30:00'),
	(107, 180.00, '2020-02-29 17:30:03'),
	(108, 180.00, '2020-02-29 17:30:06'),
	(109, 180.00, '2020-02-29 17:30:09'),
	(110, 180.00, '2020-02-29 17:30:12'),
	(111, 180.00, '2020-02-29 17:30:15'),
	(112, 180.00, '2020-02-29 17:30:18'),
	(113, 180.00, '2020-02-29 17:30:21'),
	(114, 180.00, '2020-02-29 17:30:24'),
	(115, 180.00, '2020-02-29 17:30:27'),
	(116, 180.00, '2020-02-29 17:30:31'),
	(117, 180.00, '2020-02-29 17:30:34'),
	(118, 180.00, '2020-02-29 17:30:37'),
	(119, 180.00, '2020-02-29 17:30:40'),
	(120, 180.00, '2020-02-29 17:30:43'),
	(121, 180.00, '2020-02-29 17:30:46'),
	(122, 180.00, '2020-02-29 17:30:49'),
	(123, 180.00, '2020-02-29 17:30:52'),
	(124, 180.00, '2020-02-29 17:30:55'),
	(125, 180.00, '2020-02-29 17:30:58'),
	(126, 180.00, '2020-02-29 17:31:01'),
	(127, 180.00, '2020-02-29 17:31:04'),
	(128, 180.00, '2020-02-29 17:31:07'),
	(129, 180.00, '2020-02-29 17:31:10'),
	(130, 180.00, '2020-02-29 17:31:13'),
	(131, 180.00, '2020-02-29 17:31:16'),
	(132, 180.00, '2020-02-29 17:31:19'),
	(133, 180.00, '2020-02-29 17:31:22'),
	(134, 180.00, '2020-02-29 17:31:25'),
	(135, 180.00, '2020-02-29 17:31:28'),
	(136, 180.00, '2020-02-29 17:31:31'),
	(137, 180.00, '2020-02-29 17:31:34'),
	(138, 180.00, '2020-02-29 17:31:37'),
	(139, 180.00, '2020-02-29 17:31:40'),
	(140, 180.00, '2020-02-29 17:31:43'),
	(141, 180.00, '2020-02-29 17:31:46'),
	(142, 180.00, '2020-02-29 17:31:49');
/*!40000 ALTER TABLE `direction` ENABLE KEYS */;

-- Dumping structure for table bulgarian_team.humidity
CREATE TABLE IF NOT EXISTS `humidity` (
  `id` int(10) unsigned NOT NULL,
  `humidity` double(10,2) unsigned NOT NULL DEFAULT '0.00',
  `timestamp` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table bulgarian_team.humidity: ~0 rows (approximately)
/*!40000 ALTER TABLE `humidity` DISABLE KEYS */;
/*!40000 ALTER TABLE `humidity` ENABLE KEYS */;

-- Dumping structure for table bulgarian_team.pressure
CREATE TABLE IF NOT EXISTS `pressure` (
  `id` int(10) unsigned NOT NULL,
  `pressure` double(10,2) unsigned NOT NULL DEFAULT '0.00',
  `timestamp` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table bulgarian_team.pressure: ~0 rows (approximately)
/*!40000 ALTER TABLE `pressure` DISABLE KEYS */;
/*!40000 ALTER TABLE `pressure` ENABLE KEYS */;

-- Dumping structure for table bulgarian_team.rain
CREATE TABLE IF NOT EXISTS `rain` (
  `id` int(10) unsigned NOT NULL,
  `rain` double(10,2) unsigned NOT NULL DEFAULT '0.00',
  `timestamp` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table bulgarian_team.rain: ~0 rows (approximately)
/*!40000 ALTER TABLE `rain` DISABLE KEYS */;
/*!40000 ALTER TABLE `rain` ENABLE KEYS */;

-- Dumping structure for table bulgarian_team.speed
CREATE TABLE IF NOT EXISTS `speed` (
  `id` int(10) unsigned NOT NULL,
  `speed` double(10,2) unsigned NOT NULL DEFAULT '0.00',
  `timestamp` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table bulgarian_team.speed: ~0 rows (approximately)
/*!40000 ALTER TABLE `speed` DISABLE KEYS */;
/*!40000 ALTER TABLE `speed` ENABLE KEYS */;

-- Dumping structure for table bulgarian_team.temperature
CREATE TABLE IF NOT EXISTS `temperature` (
  `id` int(10) unsigned NOT NULL,
  `temperature` double(10,2) unsigned NOT NULL DEFAULT '0.00',
  `timestamp` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table bulgarian_team.temperature: ~0 rows (approximately)
/*!40000 ALTER TABLE `temperature` DISABLE KEYS */;
/*!40000 ALTER TABLE `temperature` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
