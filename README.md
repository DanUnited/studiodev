studiodev
=========

Studiodev Framework and CMS

Special project for me and other developers. This project is created for self-education.
### Now realised next tools:
* Inversion Control with Facades
* Configuration 
* Model View Controller template
* Validators
* DataBase Class
* Query builder
* Auth realize with CMS
* Twig

### Now in developing:

ActiveRecord Class
CMS realization
linguistic division.

=========
```php
function action_page()
        {
            $page = $this->GetParam(1);
            if (AppValidator::Make(
                array('id' => $page),
                array('id' => 'required|integer|exist:content'))
            )

                AppView::generate('content.php', array('content' => Content::find($page)->inArray()));
            else
                AppRoute::ErrorPage404();
        }
```
