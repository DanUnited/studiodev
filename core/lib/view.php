<?php
    namespace lib;

    use Core\Config;

    class View
    {
        /**
         * @var \Twig_Loader_Filesystem
         */
        protected $loader;
        /**
         * @var \Twig_Environment
         */
        protected $twig;

        /** @var  string Имя шаблона */
        protected $template;

        /** @var array Данные, доступные в шаблоне */
        protected $data = array();

        public function __construct()
        {
            $conf = Config::get('general');;
            $this->template = $conf['template'];
            $this->initialize();
            $this->addData(array(
                    'user' => \AppCore::getUser(),
                ));
        }

        /**
         * Создает шаблонизатор Twig с заданными настройками
         */
        protected function initialize()
        {
            $this->loader = new \Twig_Loader_Filesystem(array(
                'application/views',
                'template/' . $this->template . '/layouts'
            ));
            $this->twig   = new \Twig_Environment($this->loader, array(
                'cache' => false,
                'debug' => true,
            ));
            $this->twig->addExtension(new \Twig_Extension_Debug());
        }

        /**
         * Выводит HTML шаблон
         * @param $view
         * @param array $data
         * @param null $template
         */
        public function generate($view, $data = array(), $template = null)
        {
            if (is_array($data))
                $this->addData($data);

            extract($this->data, EXTR_OVERWRITE);
            /** Если указан шаблон не по умолчанию */
            if (!is_null($template)) {
                $this->template = $template;
                $this->initialize();
            }

            $out = $this->twig->loadTemplate($view);
            if (count($data) != 0)
                echo $out->render($data);
            else
                echo $out->render(array());

        }

        protected function addData($input)
        {
            $this->data = array_merge($this->data,(array)$input);
        }

        /**
         * Позволяет сделать перенаправление
         * @param $url
         */
        public function redirect($url)
        {
            header("Location: $url");
        }
    }