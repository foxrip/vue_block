<?php

namespace Drupal\vue_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Vue' Block.
 *
 * @Block(
 *   id = "my_vue_app_block",
 *   admin_label = @Translation("Vue Block"),
 *   category = @Translation("Vue World"),
 * )
 */
class MyVueAppBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#theme' => 'vue_block_template',
      '#attached' => [
        'library' => [
          'vue_block/vuejs_app',
        ],
      ],
    ];
  }

}
