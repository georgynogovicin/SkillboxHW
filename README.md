# SkillboxHW

  

## HW_4.8

Основной идеей было разбить карточку на переиспользуемые маленькие компоненты.

  

0. Блок текстового содержимого (предполагаю что в дальнейшем его можно будет вынести в отдельный компонент контейнер)
	1. Выделяем компонент MetaData - В нем будут находится метаданные карточки.
			1. UserLink - Аватар пользователя и ссылка
			2. CreatedAt - Дата создания
	2. Компонент CardTitle - Заголовок карочки
1. Блок с превью поста - CardPreview
2. CardMenu - в дальнейшем там предполагается дропдаун, так что компонент будет достаточно сложный, его удобно сразу вынести в отдельный. Позднее его можно переиспользовать.
3. Блок CardControls - блок с контролами карточки, его так-же разделяем на компоненты, каждый из которых выполняет отдельную функцию:
		1. KarmaCounter - счетчик рейтинга
		2. CommentButton - кнопка возможно будет переиспользоваться в других компонентах.
		3. CardActions - Блок с экшенами: подписаться, сохранить. Такой блок всегда можно расширить добавив в него дополнительные кнопки.

4. Все кнопки с svg иконками удобно выносить в отдельный компонент и передавать им через пропсы коллбек на onClick, т.к. svg (по-моему) усложняет чтение кода, занимает много места.