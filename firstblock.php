<?php

/**
 * Plugin Name: First Block
 * Description: A simple block plugin.
 * Version: 1.0.0
 * Author: Agnieszka Sikora
 */

function blocks_course_firstblock_register_block()
{

  // Register the block type
  register_block_type_from_metadata(__DIR__);
}

add_action('init', 'blocks_course_firstblock_register_block');
