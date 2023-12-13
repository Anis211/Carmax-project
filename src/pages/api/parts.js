const parts = {
  "Детали для ТО": [
    {
      name: "Фильтр масляный",
      body: "Термин, обозначающий устройство для очистки масла от механических частиц и загрязнений, обеспечивая более эффективную работу двигателя.",
    },
    {
      name: "Фильтр воздушный",
      body: "Устройство, предназначенное для очистки воздушного потока, поступающего в двигатель, от пыли, мусора и других загрязнений.",
    },
    {
      name: "Фильтр топливный",
      body: "Устройство, служащее для фильтрации топлива перед его поступлением в систему подачи топлива двигателя.",
    },
    {
      name: "Фильтр салонный",
      body: "Устройство, устанавливаемое в системе вентиляции салона автомобиля для задержания пыли, грязи и других частиц.",
    },
    {
      name: "Фильтр трансмиссионный, фильтр ГУР",
      body: "Устройство, предназначенное для очистки масла в трансмиссии или системе гидроусилителя руля от загрязнений и металлических частиц.",
    },
    {
      name: "Свечи зажигания",
      body: "Устройства, создающие ионизированный канал воздушной смеси, необходимый для зажигания топливовоздушной смеси в цилиндре двигателя.",
    },
    {
      name: "Ремень поликлиновой",
      body: "Трансмиссионный элемент, обеспечивающий передачу крутящего момента между двигателем и другими узлами автомобиля.",
    },
    {
      name: "Ремень ГРМ",
      body: "Ремень, используемый в системе газораспределения для синхронизации работы коленчатого вала и распредвала.",
    },
    {
      name: "Термостат",
      body: "Устройство, регулирующее температуру охлаждающей жидкости в двигателе путем контроля потока жидкости.",
    },
    {
      name: "Пробка сливного отверстия",
      body: "Устройство для закрытия или открытия сливного отверстия в двигателе для слива масла или охлаждающей жидкости.",
    },
    {
      name: "Щетки стеклоочистителя",
      body: "Устройства, предназначенные для очистки стекла автомобиля от осадков и воды при использовании стеклоочистителей.",
    },
    {
      name: "Насос системы охлаждения",
      body: "Устройство, обеспечивающее циркуляцию охлаждающей жидкости по системе охлаждения двигателя.",
    },
    {
      name: "Колодки тормозные",
      body: "Детали тормозной системы, нажимаемые на тормозные диски или барабаны для создания трения и замедления движения автомобиля.",
    },
  ],
  "Двигатель ": [
    {
      name: "Прокладки",
      body: "Уплотнительные элементы, изготовленные из различных материалов, используемые для обеспечения герметичности соединений и предотвращения утечек в различных узлах и системах автомобиля. Прокладки применяются, например, в моторе для предотвращения утечек масла, в системе охлаждения для поддержания герметичности системы, а также в других местах, где требуется предотвращение протечек различных жидкостей и газов.",
    },
    {
      name: "Комплект прокладок",
      body: "Набор уплотнительных элементов, предназначенных для обеспечения герметичности соединений и предотвращения утечек.",
    },
    {
      name: "Прокладка головки цилиндра",
      body: "Уплотнительный элемент, размещаемый между головкой цилиндра и блоком цилиндров для предотвращения утечек масла и газов.",
    },
    {
      name: "Прокладка клапанной крышки",
      body: "Уплотнительный элемент, устанавливаемый между клапанной крышкой и головкой цилиндра для обеспечения герметичности.",
    },
    {
      name: "Колпачок маслоотражающий",
      body: "Устройство, предназначенное для защиты от попадания масла и других жидкостей в двигатель, устанавливаемое на верхней части клапанного механизма.",
    },
    {
      name: "Прокладка впускного коллектора",
      body: "Уплотнительный элемент, устанавливаемый между впускным коллектором и головкой цилиндра для предотвращения утечек воздуха и газов.",
    },
    {
      name: "Прокладка выпускного коллектора",
      body: "Уплотнительный элемент, устанавливаемый между выпускным коллектором и головкой цилиндра для предотвращения утечек отработанных газов.",
    },
    {
      name: "Герметизация топливной системы",
      body: "Процесс обеспечения герметичности соединений и устранения утечек в топливной системе автомобиля.",
    },
    {
      name: "Герметизация охлаждающей жидкости",
      body: "Процесс обеспечения герметичности системы циркуляции охлаждающей жидкости в двигателе.",
    },
    {
      name: "Герметизация в системе циркуляции масла",
      body: "Процесс обеспечения герметичности соединений и предотвращения утечек в системе циркуляции масла.",
    },
    {
      name: "Сальники, комплект уплотнений",
      body: "Набор уплотнительных элементов, используемых для предотвращения утечек в различных узлах и соединениях автомобиля.",
    },
    {
      name: "Cистема подачи воздуха",
      body: "Комплексный механизм, включающий в себя корпус воздушного фильтра, тросик газа, впускной коллектор, дроссельную заслонку, регулировку нагнетаемого воздуха, элементы управления и соединительные детали. Основное предназначение системы - обеспечение оптимального воздушного потока для смешивания с топливом и последующего горения в двигателе, обеспечивая необходимые условия для эффективной работы двигательной установки автомобиля.",
    },
    {
      name: "Корпус воздушного фильтра",
      body: "Защитный корпус, в котором расположен воздушный фильтр, предназначенный для задержания пыли и других частиц из воздуха, поступающего в систему впуска воздуха двигателя.",
    },
    {
      name: "Тросик газа",
      body: "Механический элемент, предназначенный для передачи управляющего воздействия на дроссельную заслонку двигателя. Тросик газа связан с педалью акселератора, и его перемещение регулирует подачу топлива и воздуха в двигатель.",
    },
    {
      name: "Коллектор впускной",
      body: "Часть двигателя, предназначенная для сбора и подачи воздуха в цилиндры. Впускной коллектор направляет воздух от воздушного фильтра к дроссельной заслонке и затем в цилиндры для смешивания с топливом.",
    },
    {
      name: "Дроссельная заслонка",
      body: "Регулирующее устройство в системе впуска воздуха двигателя, управляемое педалью газа. Дроссельная заслонка регулирует количество воздуха, поступающего в цилиндры, что влияет на обороты двигателя и мощность.",
    },
    {
      name: "Регулировка нагнетаемого воздуха",
      body: "Система, позволяющая регулировать давление и количество воздуха, подаваемого в топливную смесь в цилиндры двигателя. Это влияет на эффективность сгорания топлива и, следовательно, на производительность двигателя.",
    },
    {
      name: "Регулирование, управление",
      body: "Общий термин, охватывающий различные системы и компоненты, используемые для контроля работы двигателя. Включает в себя механические, электронные и гидравлические устройства, направленные на оптимизацию работы двигателя.",
    },
    {
      name: "Соединительные элементы, провода",
      body: "Элементы, обеспечивающие электрическую связь между различными компонентами системы впуска и управления двигателем. Провода передают электрические сигналы, необходимые для правильного функционирования различных устройств и датчиков.",
    },
    {
      name: "Механизм газораспределения",
      body: "Система компонентов, включающая в себя распределительный вал, клапаны, пружины, толкатели и другие элементы, ответственные за управление открыванием и закрыванием клапанов в цилиндрах двигателя. Механизм газораспределения регулирует поступление и выпуск газов в цилиндры, обеспечивая правильное воздействие на поршни и эффективность сгорания топливовоздушной смеси.",
    },
    {
      name: "Шестерни",
      body: "Механические элементы, обеспечивающие передачу движения между различными компонентами механизма газораспределения. Шестерни могут использоваться для привода распредвала и других частей системы.",
    },
    {
      name: "Шестерня коленвала",
      body: "Шестерня, связанная с коленвалом двигателя. Ее вращение синхронизируется с вращением коленвала и передает движение на распредвал, определяя момент открытия и закрытия клапанов.",
    },
    {
      name: "Распредвал",
      body: "Механический вал внутри двигателя, управляющий открыванием и закрыванием клапанов цилиндров. Распредвал связан с коленвалом и приводится в движение с целью точного распределения газов в цилиндрах.",
    },
    {
      name: "Картер рулевого механизма (прокладки)",
      body: "Защитный корпус или кожух, который окружает и защищает механизм газораспределения. Прокладки могут использоваться для обеспечения герметичности и предотвращения утечек масла или других жидкостей.",
    },
    {
      name: "Вал промежуточный",
      body: "Вспомогательный вал, который может использоваться в механизме газораспределения для передачи движения между коленвалом и распредвалом. Вал промежуточный может участвовать в создании сложных кинематических схем.",
    },
    {
      name: "Ремень ГРМ, натяжители ремня",
      body: "Ремень ГРМ (газораспределительного механизма) - это часть системы, передающей движение от коленвала к распредвалу. Натяжители ремня отвечают за правильное натяжение ремня, обеспечивая его надежное функционирование.",
    },
    {
      name: "Цепь привода ГРМ",
      body: "Металлическое звено, предназначенное для передачи крутящего момента между коленчатым валом и распределительным валом в системе газораспределения. Цепь привода ГРМ служит для синхронизации работы клапанов и поршней, обеспечивая правильный порядок их открывания и закрывания в процессе работы двигателя.",
    },
    {
      name: "Цепь привода распредвала",
      body: "Механическое устройство, обеспечивающее синхронизацию работы распределительного вала и коленвала внутреннего сгорания.",
    },
    {
      name: "Планка успокоителя",
      body: "Деталь, предназначенная для уменьшения колебаний и вибраций в системе привода цепи ГРМ.",
    },
    {
      name: "Планка натяжного устройства",
      body: "Деталь, обеспечивающая натяжение цепи привода распредвала для поддержания оптимальной тяги.",
    },
    {
      name: "Натяжитель цепи",
      body: "Механизм, применяемый для поддержания оптимального натяжения цепи привода ГРМ или распредвала.",
    },
    {
      name: "Комплект цепи привода распредвала",
      body: "Набор деталей, включающий цепь и связанные элементы, используемые для привода распредвала.",
    },
    {
      name: "Клапан, регулировка",
      body: "Устройство для регулировки работы клапанов в системе газораспределения для обеспечения оптимального воздушно-топливного смешения.",
    },
    {
      name: "Блок-картер",
      body: "Основная часть моторного блока, в которой располагаются цилиндры и другие важные узлы двигателя.",
    },
    {
      name: "Вал балансирный, промежуточный",
      body: "Вращающийся элемент, направленный на компенсацию вибраций и балансировку двигательного механизма.",
    },
    {
      name: "Вентиляция",
      body: "Система, обеспечивающая правильный обмен воздуха в двигателе, в том числе удаление отработанных газов.",
    },
    {
      name: "Электроника двигателя",
      body: "Комплекс электронных устройств, контролирующих и управляющих работой двигателя для оптимальной производительности.",
    },
    {
      name: "Кривошипно-шатунный механизм",
      body: "Узел, обеспечивающий преобразование вращательного движения коленвала в поступательное движение поршней.",
    },
    {
      name: "Коленчатый вал, вкладыши",
      body: "Вращающийся вал, соединенный с коленвалом и несущий вкладыши для снижения трения.",
    },
    {
      name: "Вкладыш подшипника коленвала",
      body: "Деталь, устанавливаемая в корпус двигателя для поддержания вращения коленвала с минимальным трением.",
    },
    {
      name: "Диск коленвала",
      body: "Колесо, установленное на коленвале и служащее для передачи крутящего момента на другие узлы двигателя.",
    },
    {
      name: "Маховик",
      body: "Устройство, прикрепленное к коленвалу для сглаживания колебаний и обеспечения равномерной работы двигателя.",
    },
    {
      name: "Шатун",
      body: "Деталь, соединяющая поршень с коленвалом и передающая энергию от движения поршня к вращающемуся коленвалу.",
    },
    {
      name: "Вкладыш нижней головки шатуна",
      body: "Уплотнительная деталь, размещаемая между нижней головкой шатуна и корпусом двигателя для предотвращения утечек масла.",
    },
    {
      name: "Крепление крышки шатуна",
      body: "Механизм, обеспечивающий надежное соединение крышки шатуна с другими частями двигателя.",
    },
    {
      name: "Поршневая группа",
      body: "Совокупность элементов двигателя, включающая поршень, комплект поршневых колец, палец поршневой, сальники и другие детали, ответственные за движение поршня в цилиндре и обеспечение герметичности работы.",
    },
    {
      name: "Поршень",
      body: "Цилиндрический элемент двигателя, который перемещается вверх и вниз в цилиндре под воздействием рабочей жидкости (обычно топливовоздушной смеси), преобразуя энергию сгорания в движение.",
    },
    {
      name: "Комплект поршневых колец",
      body: "Набор колец, устанавливаемых на поршне для обеспечения герметичности цилиндра, участвующих в процессе сгорания топливовоздушной смеси и обеспечивающих смазку стенок цилиндра.",
    },
    {
      name: "Палец поршневой",
      body: "Цилиндрический элемент, соединяющий поршень с шатуном и обеспечивающий свободное движение поршня в цилиндре.",
    },
    {
      name: "Сальник, комплекты уплотнений",
      body: "Набор уплотнительных элементов и сальников, используемых в различных узлах двигателя для предотвращения утечек масла и других рабочих жидкостей.",
    },
    {
      name: "Вал балансирный, промежуточный",
      body: "Механизм, предназначенный для компенсации вибраций и балансировки двигателя, улучшая его работу и уменьшая вибрации в процессе работы.",
    },
    {
      name: "Система смазки",
      body: "Комплекс механизмов и узлов, предназначенных для обеспечения смазки различных деталей и элементов двигателя, снижая трение и износ.",
    },
    {
      name: "Фильтр масляный",
      body: "Устройство, предназначенное для очистки масла от механических частиц и загрязнений, обеспечивая более эффективную работу двигателя.",
    },
    {
      name: "Радиатор масляный",
      body: "Устройство, обеспечивающее охлаждение масла, прокачивая его через радиатор и уменьшая температуру рабочей жидкости.",
    },
    {
      name: "Поддон масляный",
      body: "Емкость, размещенная в нижней части двигателя, предназначенная для сбора и хранения масла, а также обеспечения его подачи в систему смазки.",
    },
    {
      name: "Пробка сливного отверстия",
      body: "Устройство для закрытия или открытия сливного отверстия в поддоне масляного картера для слива масла при его замене.",
    },
    {
      name: "Фильтр масляный сетчатый",
      body: "Устройство для фильтрации масла, содержащее сетчатый элемент, задачей которого является удерживание мелких механических частиц.",
    },
    {
      name: "Датчик давления масла",
      body: "Устройство для измерения давления масла в системе смазки и предоставления информации об уровне давления водителю.",
    },
    {
      name: "Указатель уровня масла",
      body: "Механизм, обеспечивающий водителю информацию о текущем уровне масла в двигателе для поддержания его надлежащего уровня.",
    },
    {
      name: "Соединительные элементы",
      body: "Детали и компоненты, используемые для соединения различных элементов системы смазки.",
    },
    {
      name: "Насос масляный, комплектующие",
      body: "Устройство для подачи масла по системе смазки с различными комплектующими, включая механизмы и детали, обеспечивающие его работу.",
    },
    {
      name: "Крепление двигателя",
      body: "Система и детали, предназначенные для надежного крепления двигателя к кузову автомобиля, обеспечивая его устойчивость и безопасность.",
    },
    {
      name: "Прокладка",
      body: "Уплотнительный элемент, используемый для обеспечения герметичности соединений и предотвращения утечек масла в системе смазки.",
    },
    {
      name: "Цепь привода",
      body: "Механическое устройство, предназначенное для передачи крутящего момента от одного узла к другому, состоящее из звеньев, соединенных между собой.",
    },
    {
      name: "Крепление двигателя",
      body: "Система и детали, предназначенные для надежного крепления двигателя к кузову автомобиля, обеспечивая его устойчивость и безопасность.",
    },
    {
      name: "Кронштейн двигателя",
      body: "Деталь подвески, предназначенная для установки и крепления двигателя к кузову, обеспечивая его надежную фиксацию.",
    },
    {
      name: "Подвеска двигателя",
      body: "Комплекс системы и деталей, предназначенных для амортизации и поддержки двигателя, смягчая воздействие вибрации и ударов.",
    },
    {
      name: "Система очистки ОГ",
      body: "Комплекс устройств и механизмов, предназначенных для очистки отработанных газов от вредных веществ перед их выбросом в атмосферу.",
    },
    {
      name: "Регулирующий клапан разрежения",
      body: "Устройство, используемое для регулирования и обеспечения оптимального давления в системе, контролирующей отработанные газы.",
    },
    {
      name: "Двигатель в сборе",
      body: "Полный комплект двигателя со всеми необходимыми компонентами, готовый к установке в автомобиль.",
    },
    {
      name: "Кожух двигателя",
      body: "Защитный элемент, предназначенный для защиты двигателя от внешних воздействий и обеспечения его безопасной работы.",
    },
    {
      name: "Защита двигателя",
      body: "Комплекс элементов, предназначенных для защиты двигателя от механических повреждений и воздействия внешних факторов.",
    },
    {
      name: "Ременной привод",
      body: "Механизм передачи крутящего момента с использованием ремня, шкивов и роликов для приведения в движение различных узлов и механизмов в автомобиле.",
    },
    {
      name: "Шкив",
      body: "Колесо с углублениями или выступами, предназначенное для передачи крутящего момента через ремень.",
    },
    {
      name: "Ремень поликлиновой",
      body: "Трансмиссионный элемент, предназначенный для передачи крутящего момента между двигателем и другими узлами автомобиля.",
    },
    {
      name: "Ролики",
      body: "Устройства, направляющие и поддерживающие ремень, обеспечивая его правильное положение и натяжение.",
    },
    {
      name: "Ролик натяжителя",
      body: "Устройство, предназначенное для регулирования и обеспечения оптимального натяжения ремня в ременной передаче.",
    },
    {
      name: "Ремень ГРМ",
      body: "Ремень, используемый в системе газораспределения для синхронизации работы коленчатого вала и распредвала.",
    },
    {
      name: "Приготовление смеси",
      body: "Процесс смешивания топлива и воздуха в двигателе для обеспечения оптимального соотношения при сгорании.",
    },
    {
      name: "Прокладка",
      body: "Уплотнительный элемент, устанавливаемый для обеспечения герметичности соединений и предотвращения утечек.",
    },
    {
      name: "Заслонка дроссельная (патрубок, фланец)",
      body: "Устройство для регулирования количества поступающего воздуха в систему впуска двигателя.",
    },
    {
      name: "Форсунка",
      body: "Устройство для подачи топлива в камеру сгорания двигателя в виде мелких струй для обеспечения равномерного сгорания.",
    },
    {
      name: "Распылитель, эмульсионная трубка",
      body: "Устройство для распыления топливной эмульсии в системе впрыска для лучшего смешивания с воздухом.",
    },
    {
      name: "Педаль акселератора",
      body: "Устройство управления, позволяющее водителю регулировать количество поступающего воздуха и топлива в двигатель.",
    },
    {
      name: "Топливопровод",
      body: "Трубопровод или система труб, предназначенных для транспортировки топлива от бака к двигателю.",
    },
    {
      name: "Датчик массового расхода воздуха",
      body: "Устройство, измеряющее количество поступающего воздуха в двигатель для регулирования смеси.",
    },
    {
      name: "Датчик кислорода",
      body: "Устройство для измерения уровня кислорода в отработанных газах и обратной связи с системой управления двигателем.",
    },
    {
      name: "Блок управления двигателем",
      body: "Электронное устройство, отвечающее за контроль и управление различными параметрами работы двигателя.",
    },
    {
      name: "Головка блока цилиндров",
      body: "Деталь двигателя, закрывающая верхнюю часть цилиндров и обеспечивающая герметичность рабочей камеры.",
    },
    {
      name: "Прокладка головки цилиндра",
      body: "Уплотнительный элемент, размещаемый между головкой цилиндра и блоком цилиндров для предотвращения утечек масла и газов.",
    },
    {
      name: "Крышка клапанная",
      body: "Деталь, закрывающая верхнюю часть головки блока цилиндров и обеспечивающая доступ к клапанам.",
    },
    {
      name: "Прокладка впускного, выпускного коллектора",
      body: "Уплотнительный элемент, устанавливаемый между головкой цилиндра и коллекторами для предотвращения утечек.",
    },
    {
      name: "Направляющая клапана",
      body: "Деталь, направляющая движение клапана в головке блока цилиндров.",
    },
    {
      name: "Болт головки блока цилиндра",
      body: "Крепежный элемент, используемый для крепления головки блока цилиндров к блоку цилиндров.",
    },
    {
      name: "Крышка маслозаливной горловины",
      body: "Деталь, закрывающая отверстие для заливки масла в двигатель.",
    },
    {
      name: "Система зажигания, накаливания",
      body: "Комплекс устройств, обеспечивающих подачу электрического разряда в зажигание топливовоздушной смеси в цилиндрах двигателя.",
    },
    {
      name: "Катушка зажигания",
      body: "Устройство для создания высоковольтного электрического разряда, необходимого для зажигания топливовоздушной смеси в цилиндре.",
    },
    {
      name: "Свечи зажигания",
      body: "Устройства, создающие ионизированный канал воздушной смеси, необходимый для зажигания топливовоздушной смеси в цилиндре двигателя.",
    },
    {
      name: "Генератор импульсов",
      body: "Устройство, генерирующее импульсы или сигналы, используемые в системе зажигания для синхронизации момента зажигания.",
    },
  ],
  "Топливная система": [
    {
      name: "Топливная система",
      body: "Комплекс узлов и деталей, обеспечивающих подачу, фильтрацию и распределение топлива в двигатель.",
    },
    {
      name: "Трубка забора топлива в сборе",
      body: "Деталь, предназначенная для забора топлива из топливного бака и подачи его в систему топливоподачи.",
    },
    {
      name: "Бак топливный",
      body: "Емкость, предназначенная для хранения топлива, установленная в автомобиле.",
    },
    {
      name: "Клапан",
      body: "Устройство, регулирующее поток топлива в системе и предотвращающее обратный поток.",
    },
    {
      name: "Фильтр топливный",
      body: "Устройство, предназначенное для очистки топлива от механических частиц и загрязнений перед его поступлением в систему подачи топлива двигателя.",
    },
    {
      name: "Датчик уровня топлива",
      body: "Устройство, измеряющее уровень топлива в топливном баке и передающее информацию на приборную панель.",
    },
    {
      name: "Регулятор давления подачи топлива",
      body: "Устройство, регулирующее давление топлива в системе подачи для обеспечения оптимальной работы двигателя.",
    },
    {
      name: "Насос топливный",
      body: "Устройство, обеспечивающее подачу топлива из бака в систему топливоподачи двигателя.",
    },
  ],
  "Система охлаждения": [
    {
      name: "Термостат",
      body: "Устройство, регулирующее температуру охлаждающей жидкости в двигателе путем контроля потока жидкости.",
    },
    {
      name: "Прокладка термостата",
      body: "Уплотнительный элемент, устанавливаемый между термостатом и двигателем для предотвращения утечек охлаждающей жидкости.",
    },
    {
      name: "Радиатор масляный, водяной",
      body: "Устройство, предназначенное для охлаждения масла или охлаждающей жидкости в двигателе.",
    },
    {
      name: "Радиатор масляный",
      body: "Устройство для охлаждения масла в двигателе.",
    },
    {
      name: "Радиатор системы охлаждения",
      body: "Устройство для охлаждения охлаждающей жидкости в системе охлаждения двигателя.",
    },
    {
      name: "Крепление радиатора",
      body: "Конструктивный элемент, обеспечивающий установку и фиксацию радиатора в системе охлаждения.",
    },
    {
      name: "Радиатор печки",
      body: "Устройство, предназначенное для охлаждения воздуха, проходящего через обогревательный элемент печки автомобиля.",
    },
    {
      name: "Расширительный бачок",
      body: "Емкость, предназначенная для компенсации изменений объема охлаждающей жидкости в системе охлаждения при изменении температуры.",
    },
    {
      name: "Патрубки системы охлаждения",
      body: "Трубопроводы, используемые в системе охлаждения для циркуляции охлаждающей жидкости между различными узлами.",
    },
    {
      name: "Фланец",
      body: "Деталь, предназначенная для соединения или закрепления трубопровода в системе охлаждения.",
    },
    {
      name: "Выключатель, датчик",
      body: "Электронное устройство, предназначенное для контроля параметров системы охлаждения и управления ею.",
    },
    {
      name: "Вентилятор охлаждения радиатора",
      body: "Устройство, обеспечивающее дополнительное охлаждение радиатора за счет воздушного потока.",
    },
    {
      name: "Насос системы охлаждения, прокладка",
      body: "Устройство для циркуляции охлаждающей жидкости по системе охлаждения с прокладкой для обеспечения герметичности соединений.",
    },
    {
      name: "Насос системы охлаждения",
      body: "Устройство, обеспечивающее циркуляцию охлаждающей жидкости по системе охлаждения двигателя.",
    },
    {
      name: "Шкив",
      body: "Круглый диск с выступами или пазами, используемый для передачи механической энергии от вала к насосу или другому устройству.",
    },
  ],
  "Cистема Выпуска": [
    {
      name: "Нейтрализация ОГ",
      body: "Процесс снижения или полного устранения выбросов отработанных газов в окружающую среду.",
    },
    {
      name: "Лямбда-зонд",
      body: "Датчик, измеряющий концентрацию кислорода в отработавших газах и передающий данные в систему управления двигателем для оптимизации смеси топлива и воздуха.",
    },
    {
      name: "Рециркуляция ОГ (EGR)",
      body: "Система, возвращающая часть отработанных газов в цилиндр для уменьшения температуры сгорания и снижения образования оксидов азота.",
    },
    {
      name: "Вакуумный клапан управления",
      body: "Устройство, используемое в системе управления двигателем для регулировки вакуума и управления различными элементами, такими как клапаны или заслонки.",
    },
    {
      name: "Глушитель в сборе",
      body: "Узел системы выхлопа, предназначенный для снижения уровня шума и обеспечения дополнительной очистки отработанных газов.",
    },
    {
      name: "Катализатор",
      body: "Устройство, содержащее катализаторы, способные ускорять химические реакции в отработанных газах для уменьшения содержания вредных веществ.",
    },
    {
      name: "Датчик кислорода",
      body: "Датчик, измеряющий концентрацию кислорода в отработавших газах и передающий данные в систему управления двигателем для оптимизации смеси топлива и воздуха.",
    },
    {
      name: "Коллектор выпускной",
      body: "Узел системы выхлопа, собирающий отработанные газы из цилиндров и направляющий их в глушитель.",
    },
    {
      name: "Трубы",
      body: "Элементы трубопровода, соединяющие различные компоненты системы выхлопа, такие как глушитель, катализатор и коллектор выпускной.",
    },
    {
      name: "Защита от перегрева",
      body: "Устройство, предназначенное для предотвращения перегрева системы выхлопа и окружающих деталей при высоких температурах.",
    },
    {
      name: "Монтажные элементы",
      body: "Различные компоненты и детали, используемые для соединения, крепления и установки различных узлов и элементов автомобильной системы.",
    },
    {
      name: "Прокладка",
      body: "Уплотнительный элемент, предназначенный для обеспечения герметичности соединений и предотвращения утечек масла, газов или жидкостей.",
    },
    {
      name: "Отбойник",
      body: "Деталь, предназначенная для амортизации ударов или вибрации, защищая соединенные части от повреждений.",
    },
    {
      name: "Резиновые полоски",
      body: "Эластичные полосы из резины, используемые для амортизации и снижения вибрации в различных узлах и компонентах автомобиля.",
    },
    {
      name: "Кронштейн",
      body: "Металлическая или жесткая деталь, предназначенная для крепления и удержания других частей или узлов.",
    },
    {
      name: "Зажимная деталь",
      body: "Деталь, предназначенная для фиксации или удержания других элементов, обеспечивая их надежное соединение или закрепление.",
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(parts);
}