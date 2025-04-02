<?php
/**
 * Plugin Name: Random Lipsum Block
 * Description: A Gutenberg block that generates Lorem Ipsum text.
 * Version: 1.0.0
 * Author: Your Name
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Register the block
function rand_lipsum_block_init() {
    register_block_type(__DIR__);
}
add_action('init', 'rand_lipsum_block_init');