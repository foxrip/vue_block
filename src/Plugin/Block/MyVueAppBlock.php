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
        'drupalSettings' => [
          'filter' => [
            'tags' => $this->getTags(),
          ]
        ]
      ],
    ];
  }
  /**
   * Get the filters from taxonomy in this case.
   */
  public function getTags() {
    // Specify the vocabulary name you want to retrieve terms from.
    /**
     * @todo maybe this need to be a config parameter.
     */
    $vid = 'events';
    $terms = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadTree($vid);
    // Prepare an array to store term data.
    $term_data = [];

    foreach ($terms as $term) {
      $term_data[] = [
        'id' => $term->tid,
        'name' => $term->name,
      ];
    }
    // Return the term data as JSON.
    /**
     * @todo maybe we can use jsonresponse from drupal.
     */
    return json_encode($term_data);
  }
}
