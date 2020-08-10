import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navegação',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Inicio',
        type: 'item',
        url: '/dashboard/analytics',
        icon: 'feather icon-home',
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'pesquisas',
    title: 'Pesquias',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'combustivel',
        title: 'Combustiveis',
        type: 'collapse',
        icon: 'feather icon-battery-charging',
        children: [
          {
            id: 'geral',
            title: 'Geral',
            type: 'item',
            url: '/combustivel',
          },
          {
             id: 'gasolina',
             title: 'Gasolina',
             type: 'item',
             url: '/combustivel/gasolina',
             target: true
          },
          {
             id: 'etanol',
             title: 'Etanol',
             type: 'item',
             url: '/combustivel/etanol',
             target: true
          },
          {
             id: 'diesel',
             title: 'Diesel',
             type: 'item',
             url: '/combustivel/diesel',
             target: true
          }
        ]
      },
      {
        id: 'escolar',
        title: 'Escolar',
        type: 'collapse',
        icon: 'feather icon-book',
        children: [
          {
            id: 'geral',
            title: 'Geral',
            type: 'item',
            url: '/escolar/geral',
            target: true
          },
          {
            id: 'bercario',
            title: 'Berçário',
            type: 'item',
            url: '/escolar/bercario',
            target: true
          },
          {
            id: 'infantil',
            title: 'Ensino Infantil',
            type: 'item',
            url: '/escolar/infantil',
            target: true
          },
          {
            id: 'fundamental1',
            title: 'Ensino Fundamental I',
            type: 'item',
            url: '/escolar/fundamental1',
            target: true
          },
          {
            id: 'fundamental2',
            title: 'Ensino Fundamental II',
            type: 'item',
            url: '/escolar/fundamental2',
            target: true
          },
          {
            id: 'medio',
            title: 'Ensino Médio',
            type: 'item',
            url: '/escolar/medio',
            target: true
          },
          {
            id: 'prevestibular',
            title: 'Pré-Vestibular',
            type: 'item',
            url: '/escolar/prevestibular',
            target: true
          }
        ]
      },
      {
        id: 'bebidas',
        title: 'Bebidas',
        type: 'collapse',
        icon: 'feather icon-filter',
        children: [
          {
            id: 'geral',
            title: 'Geral',
            type: 'item',
            url: '/escolar/geral',
            target: true
          },
          {
            id: 'cerveja',
            title: 'Cerveja',
            type: 'item',
            url: '/escolar/bercario',
            target: true
          },
          {
            id: 'destilados',
            title: 'Destilados',
            type: 'item',
            url: '/bebidas/destilados',
            target: true
          },
          {
            id: 'refrireranteeenergetico',
            title: 'Refrigerante e Energético',
            type: 'item',
            url: '/bebidas/refrireranteeenergetico',
            target: true
          },
          {
            id: 'sucos',
            title: 'Sucos',
            type: 'item',
            url: '/bebidas/sucos',
            target: true
          }
        ]
      },
      {
        id: 'churrasco',
        title: 'Churrasco',
        type: 'collapse',
        icon: 'feather icon-music',
        children: [
          {
            id: 'geral',
            title: 'Geral',
            type: 'item',
            url: '/churrasco/geral',
            target: true
          },
          {
            id: 'carnes',
            title: 'Carnes',
            type: 'item',
            url: '/churrasco/carnes',
            target: true
          },
          {
            id: 'cortesespeciais',
            title: 'Cortes Especiais',
            type: 'item',
            url: '/churrasco/cortesespeciais',
            target: true
          },
          {
            id: 'carvao',
            title: 'Carvão',
            type: 'item',
            url: '/churrasco/carvao',
            target: true
          },
          {
            id: 'acompanhamentos',
            title: 'Acompanhamentos',
            type: 'item',
            url: '/churrasco/acompanhamentos',
            target: true
          }
        ]
      },
      {
        id: 'autoescola',
        title: 'Auto Escola',
        type: 'collapse',
        icon: 'feather icon-search',
        children: [
          {
            id: 'geral',
            title: 'Geral',
            type: 'item',
            url: '/autoescola/geral',
            target: true
          },
          {
            id: '1habilitacaocarro',
            title: '1ª Habilitacao Carro (B)',
            type: 'item',
            url: '/autoescola/1habilitacaocarro',
            target: true
          },
          {
            id: '1habilitacaomoto',
            title: '1ª Habilitacao Moto (A)',
            type: 'item',
            url: '/autoescola/1habilitacaomoto',
            target: true
          },
          {
            id: 'categoriab',
            title: 'Adição de Categoria B',
            type: 'item',
            url: '/autoescola/categoriab',
            target: true
          },
          {
            id: 'categoriaa',
            title: 'Adição de Categoria A',
            type: 'item',
            url: '/autoescola/categoriaa',
            target: true
          },
          {
            id: 'mudanca',
            title: 'Mudança de Categoria',
            type: 'item',
            url: '/autoescola/mudanca',
            target: true
          },
          {
            id: 'outros',
            title: 'Outros Serviços',
            type: 'item',
            url: '/autoescola/outros',
            target: true
          }
        ]
      },
      {
        id: 'cestabasica',
        title: 'Cesta Básica',
        type: 'item',
        url: '/cestabasica/geral',
        icon: 'feather icon-shopping-cart',
        breadcrumbs: false
      },
      {
        id: 'gas',
        title: 'Gás de Cozinha',
        type: 'item',
        url: '/gas/geral',
        icon: 'feather icon-zap',
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'atendimento',
    title: 'Atendimento',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'duvidas',
        title: 'Dúvidas',
        type: 'item',
        url: '/duvidas/',
        icon: 'feather icon-help-circle',
        breadcrumbs: false
      },
      {
        id: 'reclamacao',
        title: 'Reclamações',
        type: 'item',
        url: '/reclamacao/',
        icon: 'feather icon-frown',
        breadcrumbs: false
      },
      {
        id: 'denuncia',
        title: 'Denúncias',
        type: 'collapse',
        icon: 'feather icon-alert-circle',
        children: [
          {
            id: 'geral',
            title: 'Geral',
            type: 'item',
            url: '/denuncia/geral',
            target: true
          },
          {
            id: 'comum',
            title: 'Comum',
            type: 'item',
            url: '/denuncia/comum',
            target: true
          },
          {
            id: 'bancos',
            title: 'Bancos',
            type: 'item',
            url: '/autoescola/bancos',
            target: true
          },
          {
            id: 'transporte',
            title: 'Transporte Público',
            type: 'item',
            url: '/autoescola/transporte',
            target: true
          }
        ]
      }
    ]
  },
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/analytics',
        icon: 'feather icon-home',
        breadcrumbs: false
      },
      {
        id: 'page-layouts',
        title: 'Page Layouts',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'vertical',
            title: 'Vertical',
            type: 'item',
            url: '/layout/static',
            target: true
          },
          {
            id: 'horizontal',
            title: 'Horizontal',
            type: 'item',
            url: '/layout/horizontal',
            target: true
          }
        ]
      }
    ]
  },
  {
    id: 'ui-element',
    title: 'UI ELEMENT',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'basic',
        title: 'Basic',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'alert',
            title: 'Alert',
            type: 'item',
            url: '/basic/alert'
          },
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: '/basic/badges'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'Breadcrumbs & Pagination',
            type: 'item',
            url: '/basic/breadcrumb-paging'
          },
          {
            id: 'cards',
            title: 'Cards',
            type: 'item',
            url: '/basic/cards'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: '/basic/collapse'
          },
          {
            id: 'carousel',
            title: 'Carousel',
            type: 'item',
            url: '/basic/carousel'
          },
          {
            id: 'grid-system',
            title: 'Grid System',
            type: 'item',
            url: '/basic/grid-system'
          },
          {
            id: 'progress',
            title: 'Progress',
            type: 'item',
            url: '/basic/progress'
          },
          {
            id: 'modal',
            title: 'Modal',
            type: 'item',
            url: '/basic/modal'
          },
          {
            id: 'spinner',
            title: 'Spinner',
            type: 'item',
            url: '/basic/spinner'
          },
          {
            id: 'tabs-pills',
            title: 'Tabs & Pills',
            type: 'item',
            url: '/basic/tabs-pills'
          },
          {
            id: 'typography',
            title: 'Typography',
            type: 'item',
            url: '/basic/typography'
          },
          {
            id: 'tooltip-popovers',
            title: 'Tooltip & Popovers',
            type: 'item',
            url: '/basic/tooltip-popovers'
          },
          {
            id: 'toasts',
            title: 'Toasts',
            type: 'item',
            url: '/basic/toasts'
          },
          {
            id: 'other',
            title: 'Other',
            type: 'item',
            url: '/basic/other'
          }
        ]
      }
    ]
  },
  {
    id: 'forms-tables',
    title: 'Forms & Tables',
    type: 'group',
    icon: 'feather icon-layout',
    children: [
      {
        id: 'forms-element',
        title: 'Forms',
        type: 'item',
        url: '/forms/basic',
        icon: 'feather icon-file-text'
      },
      {
        id: 'bootstrap',
        title: 'Table',
        type: 'item',
        url: '/tbl-bootstrap/bt-basic',
        icon: 'feather icon-server'
      }
    ]
  },
  {
    id: 'chart-maps',
    title: 'Chart & Maps',
    type: 'group',
    icon: 'feather icon-pie-chart',
    children: [
      {
        id: 'charts',
        title: 'Charts',
        type: 'item',
        url: '/charts/apex',
        icon: 'feather icon-pie-chart'
      },
      {
        id: 'maps',
        title: 'Maps',
        type: 'item',
        url: '/maps/google',
        icon: 'feather icon-map'
      }
    ]
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'feather icon-file-text',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
