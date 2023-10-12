<?php

namespace Drupal\vue_block\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for vue_search routes.
 */
class VueSearchController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
