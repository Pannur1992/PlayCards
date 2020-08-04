<?php

// CORS support
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
function shuffled_deck()
{
    $total_cards = array(
        'D-A', 'D-2', 'D-3', 'D-4', 'D-5', 'D-6', 'D-7', 'D-8', 'D-9', 'D-X', 'D-J', 'D-Q', 'D-K',
        'C-A', 'C-2', 'C-3', 'C-4', 'C-5', 'C-6', 'C-7', 'C-8', 'C-9', 'C-X', 'C-J', 'C-Q', 'C-K',
        'H-A', 'H-2', 'H-3', 'H-4', 'H-5', 'H-6', 'H-7', 'H-8', 'H-9', 'H-X', 'H-J', 'H-Q', 'H-K',
        'S-A', 'S-2', 'S-3', 'S-4', 'S-5', 'S-6', 'S-7', 'S-8', 'S-9', 'S-X', 'S-J', 'S-Q', 'S-K'
    );

    shuffle($total_cards); // shuffling cards eachtime
    $total_player = [];
for($i = 0; $i < count($total_cards); $i++){ 
    $total_player[$i % 4][] = $total_cards[$i];   //set four players cards
}

return $total_player;


}
// header('Access-Control-Allow-Origin: '*');
$result['data'] = shuffled_deck();
echo json_encode($result);
// echo "<pre>";
// print_r(shuffled_deck());
// echo "</pre>";
?>