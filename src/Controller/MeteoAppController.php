<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MeteoAppController extends AbstractController
{
    #[Route('/meteo_app', name: 'app_meteo_app')]
    public function index(): Response
    {
        return $this->render('meteo_app/index.html.twig', [
            'controller_name' => 'MeteoAppController',
        ]);
    }
}
