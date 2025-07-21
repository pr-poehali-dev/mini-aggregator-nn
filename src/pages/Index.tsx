import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const aiTools = [
    {
      name: 'ChatGPT',
      description: 'Мощная языковая модель для генерации текста и диалогов',
      category: 'Текст',
      rating: 4.8,
      features: ['Диалоги', 'Письмо', 'Код', 'Анализ'],
      price: 'Бесплатно / $20/мес',
      logo: '🤖'
    },
    {
      name: 'Midjourney',
      description: 'ИИ для создания уникальных изображений из текстовых описаний',
      category: 'Изображения',
      rating: 4.9,
      features: ['Арт', 'Фото', 'Дизайн', 'Концепты'],
      price: '$10-60/мес',
      logo: '🎨'
    },
    {
      name: 'Claude',
      description: 'Интеллектуальный помощник для сложных задач и анализа',
      category: 'Текст',
      rating: 4.7,
      features: ['Анализ', 'Код', 'Исследования', 'Письмо'],
      price: 'Бесплатно / $20/мес',
      logo: '🧠'
    },
    {
      name: 'DALL-E',
      description: 'Генерация изображений высокого качества от OpenAI',
      category: 'Изображения',
      rating: 4.6,
      features: ['Генерация', 'Редактирование', 'Вариации'],
      price: '$15/мес',
      logo: '🖼️'
    },
    {
      name: 'GitHub Copilot',
      description: 'ИИ-ассистент для программирования и автодополнения кода',
      category: 'Код',
      rating: 4.5,
      features: ['Автодополнение', 'Рефакторинг', 'Тесты'],
      price: '$10/мес',
      logo: '⚡'
    },
    {
      name: 'Runway',
      description: 'Инструменты ИИ для создания и редактирования видео',
      category: 'Видео',
      rating: 4.4,
      features: ['Генерация', 'Монтаж', 'Эффекты'],
      price: '$12-76/мес',
      logo: '🎬'
    }
  ];

  const blogPosts = [
    {
      title: 'Топ-10 нейросетей 2024 года',
      excerpt: 'Обзор самых популярных и эффективных ИИ-инструментов этого года',
      date: '15 июля 2024',
      category: 'Обзоры'
    },
    {
      title: 'Как выбрать нейросеть для бизнеса',
      excerpt: 'Практическое руководство по внедрению ИИ в рабочие процессы',
      date: '12 июля 2024',
      category: 'Бизнес'
    },
    {
      title: 'Будущее генеративного ИИ',
      excerpt: 'Тренды и прогнозы развития технологий искусственного интеллекта',
      date: '8 июля 2024',
      category: 'Тренды'
    }
  ];

  const comparisonData = [
    { tool: 'ChatGPT', text: '⭐⭐⭐⭐⭐', images: '❌', code: '⭐⭐⭐⭐', analysis: '⭐⭐⭐⭐', price: '$20' },
    { tool: 'Claude', text: '⭐⭐⭐⭐⭐', images: '❌', code: '⭐⭐⭐⭐⭐', analysis: '⭐⭐⭐⭐⭐', price: '$20' },
    { tool: 'Midjourney', text: '❌', images: '⭐⭐⭐⭐⭐', code: '❌', analysis: '⭐⭐', price: '$30' },
    { tool: 'DALL-E', text: '⭐', images: '⭐⭐⭐⭐', code: '❌', analysis: '⭐⭐', price: '$15' }
  ];

  const filteredTools = aiTools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="Brain" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Neural Hub
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Главная</a>
              <a href="#catalog" className="text-gray-700 hover:text-purple-600 transition-colors">Каталог</a>
              <a href="#compare" className="text-gray-700 hover:text-purple-600 transition-colors">Сравнение</a>
              <a href="#blog" className="text-gray-700 hover:text-purple-600 transition-colors">Блог</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent">
              Мини-агрегатор нейросетей
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Найдите идеальный ИИ-инструмент для ваших задач. Сравнивайте возможности, изучайте отзывы и выбирайте лучшее.
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск нейросетей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-purple-200 focus:border-purple-400"
                />
                <Icon name="Search" size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <img
              src="/img/3d0aa3f8-ea97-4801-8843-38332873cb42.jpg"
              alt="AI Neural Network"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Каталог нейросетей</h2>
            <p className="text-lg text-gray-600">Популярные ИИ-инструменты для различных задач</p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-5">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="Текст">Текст</TabsTrigger>
              <TabsTrigger value="Изображения">Фото</TabsTrigger>
              <TabsTrigger value="Код">Код</TabsTrigger>
              <TabsTrigger value="Видео">Видео</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{tool.logo}</span>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{tool.category}</Badge>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">{tool.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{tool.description}</CardDescription>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tool.features.map((feature, fIndex) => (
                        <Badge key={fIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-purple-600">{tool.price}</span>
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-500">
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Сравнение функций</h2>
            <p className="text-lg text-gray-600">Интерактивная таблица возможностей популярных нейросетей</p>
          </div>

          <Card className="max-w-6xl mx-auto">
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">Нейросеть</TableHead>
                    <TableHead className="text-center">Работа с текстом</TableHead>
                    <TableHead className="text-center">Создание изображений</TableHead>
                    <TableHead className="text-center">Написание кода</TableHead>
                    <TableHead className="text-center">Анализ данных</TableHead>
                    <TableHead className="text-center">Цена/мес</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{row.tool}</TableCell>
                      <TableCell className="text-center">{row.text}</TableCell>
                      <TableCell className="text-center">{row.images}</TableCell>
                      <TableCell className="text-center">{row.code}</TableCell>
                      <TableCell className="text-center">{row.analysis}</TableCell>
                      <TableCell className="text-center font-medium">{row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Блог про нейросети</h2>
            <p className="text-lg text-gray-600">Актуальные статьи и обзоры ИИ-технологий</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="secondary">{post.category}</Badge>
                  <CardTitle className="text-lg hover:text-purple-600 cursor-pointer transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="ghost" size="sm">
                      Читать
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Контакты</h2>
            <p className="text-lg text-gray-600">Свяжитесь с нами для предложений и сотрудничества</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">hello@neuralhub.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Telegram</p>
                      <p className="text-gray-600">@neuralhub_support</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Email" />
                </div>
                <div className="mt-4">
                  <textarea
                    className="w-full p-3 border rounded-lg resize-none h-32"
                    placeholder="Ваше сообщение..."
                  />
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-500">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="Brain" size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Neural Hub</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Ваш проводник в мире искусственного интеллекта
            </p>
            <div className="flex justify-center gap-6">
              <Icon name="Github" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Twitter" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Linkedin" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500">© 2024 Neural Hub. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;