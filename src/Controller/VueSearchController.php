<?php

namespace Drupal\vue_block\Controller;

use Drupal\views\Views;
use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Returns responses for vue_search routes.
 */
class VueSearchController extends ControllerBase {

  /**
   * Here we can retrieve the results using a view.
   */
  public function response() {
    // $view = Views::getView('my_view');
    $response = [];
    return new JsonResponse($response);
  }

}
