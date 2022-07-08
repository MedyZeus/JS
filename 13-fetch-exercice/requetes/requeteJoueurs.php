<?php
	require_once('fonctionsDB.php');

	if (isset($_POST('idEquipe'))) {
		$joueurs = getAllJoueursParEquipe($_POST('idEquipe'));

		while ($joueur = mysqli_fetch_assoc($joueurs)) {
			$tableau[] = $joueur;
		}

		//  json encode le tableau en string
		echo json_encode($tableau);
	} else {
		echo 'Erreur';
	}


?>