export default {
  'components': {
    'layers-dialogs': {
      'settings': {
        'tile-yandex': {
          'map-type-dropdown': {
            'caption': 'Тип карты'
          },
          'js-api-url-textbox': {
            'caption': 'URL для загрузки JS API Яндекс карт'
          },
          'detect-language-automatically-checkbox': {
            'caption': 'Определять язык автоматически'
          }
        },

        'geocoder-yandex': {
          'url-textbox': {
            'caption': 'Url'
          },
          'autocomplete-url-textbox': {
            'caption': 'Url для автокомплита'
          }
        }
      }
    },

    'map-commands-dialogs': {
      'search-settings': {
        'geocoder-yandex': {
          'query-string-textbox': {
            'caption': 'Строка запроса'
          },
          'max-results-count-textbox': {
            'caption': 'Максимальное число возвращаемых результатов'
          },
          'skip-results-count-textbox': {
            'caption': 'Число пропускаемых результатов'
          }
        }
      }
    }
  }
};
