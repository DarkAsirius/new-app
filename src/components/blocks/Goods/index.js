import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../Goods/Goods.css'; // Подключаем CSS для стилизации

const teaData = {
  Пуэры: {
    подкатегории: [
      {
        name: 'Шен-пуэр',
        image: 'https://via.placeholder.com/100',
        description: 'Описание Шен-пуэра.',
        teas: [
          { name: 'Аромат горы Цзинмай', image: '../../../Шен аромат горы Цзинмай.jpg', description: '"Аромат горы Цзинмай" обладает глубоким и насыщенным ароматом, в котором можно уловить землистые, древесные и иногда фруктовые ноты. Аромат может меняться в зависимости от времени хранения и условий, в которых он был выдержан.Вкус пуэра мягкий и округлый, с характерной сладостью и легкой терпкостью. Он может иметь нотки шоколада, орехов и даже легкие цветочные оттенки. Послевкусие обычно длительное и приятное, оставляющее ощущение тепла и уюта.' },
          { name: 'Беседка среди высоких деревьев', image: '../../../беседка.jpg', description: 'Аромат этого пуэра богат и многослойный. В нем можно уловить землистые, древесные и травяные ноты, а также легкие цветочные и фруктовые оттенки. Аромат может меняться в зависимости от времени хранения и условий, в которых он был выдержан. Вкус "Беседки среди высоких деревьев" мягкий и округлый, с характерной сладостью и легкой терпкостью. Он может иметь нотки меда, орехов и даже шоколада. Послевкусие обычно длительное и насыщенное, оставляющее приятное ощущение.' },
          { name: 'Черная вершина', image: '../../../Черная вершина.jpg', description: 'Аромат пуэра "Черная вершина" насыщенный и многослойный. В нем можно уловить землистые и древесные ноты, а также легкие сладкие и фруктовые оттенки. Аромат может меняться в зависимости от условий хранения и времени выдержки. Вкус "Черной вершины" глубокий и насыщенный, с характерной сладостью и легкой терпкостью. Он может иметь нотки шоколада, карамели и даже специй. Послевкусие обычно длительное и оставляет приятное ощущение.' },
        ],
      },
      {
        name: 'Шу-пуэр',
        image: 'https://via.placeholder.com/100',
        description: 'Описание Шу-пуэра.',
        teas: [
          { name: 'Мэнку Бо Цзюнь', image: '../../../Бо Цзюнь шу.jpg', description: 'Мэнку Бо Цзюнь обладает карамельно-фруктовым ароматом, который сохраняется даже после остывания. В процессе старения появляются новые оттенки, придающие чаю уникальность. Вкус чая богатый и сладкий, с проникающим глубоко в горло послевкусием. Он раскрывается слоями, постепенно, что делает каждое заваривание уникальным.' },
          { name: 'Гунтин', image: '../../../гунтин шу.jpg', description: 'Аромат Гунтина богат и многослойный. В нем можно уловить цветочные, фруктовые и даже слегка древесные ноты. Аромат может варьироваться в зависимости от конкретного сорта и условий хранения. Вкус Гунтина мягкий и округлый, с легкой сладостью и приятной терпкостью. Он может иметь нотки меда, орехов и даже легкие цитрусовые оттенки. Послевкусие обычно длительное и насыщенное.' },
          { name: 'Лао Ча Тоу', image: '../../../лао ча тоу.jpg', description: 'Чай обладает приятными нотами шиповника и сушеных ягод, что напоминает пуэры Да И начала 2010-х годов. Во вкусе Лао Ча Тоу сбалансированный и ровный, без грубости, с умеренной плотностью. При варке раскрываются более тяжелые дубовые и банные ноты, а также оттенки абрикосовых косточек.' },
        ],
      },
    ],
  },
  Цветные: {
    подкатегории: [
      { 
        name: 'Хэй ча', 
        image: 'https://via.placeholder.com/100', 
        description: 'Описание Хэй чая.', 
        teas: [
          { name: 'Лю бао', image: '../../../лю бао.jpg', description: 'Аромат Хэй Ча может варьироваться от землистых и древесных нот до сладких и фруктовых оттенков. В зависимости от времени хранения и условий, в которых он был выдержан, аромат может меняться, раскрывая новые грани. Вкус Хэй Ча обычно глубокий и насыщенный, с характерной сладостью и легкой терпкостью. Он может иметь нотки шоколада, карамели, орехов и даже специй. Послевкусие часто длительное и приятное.' },
        ],
      },
      { 
        name: 'Красный', 
        image: 'https://via.placeholder.com/100', 
        description: 'Описание Красного чая.', 
        teas: [
          { name: 'ГуШу Хун Ча Ассамика', image: '../../../гушу хунча.JPG', description: 'Аромат ГуШу Хун Ча Ассамика богат и многослойный. В нем можно уловить сладкие, фруктовые и цветочные ноты, а также легкие древесные оттенки. Аромат может варьироваться в зависимости от условий хранения и времени выдержки. Вкус этого чая насыщенный и глубокий, с характерной сладостью и легкой терпкостью. Он может иметь нотки меда, шоколада, орехов и даже специй. Послевкусие обычно длительное и приятное, оставляющее ощущение тепла и уюта.' },
          { name: 'Да Цзинь Чжэнь', image: '../../../да цзинь чжэнь.jpg', description: 'Аромат этого чая богатый и сладкий, с нотами меда, фруктов и легкими цветочными оттенками. Он может варьироваться в зависимости от условий хранения и времени выдержки. Вкус Да Цзинь Чжэнь мягкий и округлый, с характерной сладостью и легкой терпкостью. Он может иметь нотки карамели, орехов и даже шоколада. Послевкусие обычно длительное и приятное, оставляющее ощущение тепла и уюта.' },
          { name: 'Е Шэн Цзы Ча', image: '../../../дикий шайхун.jpg', description: 'Аромат этого чая свежий и яркий, с нотами трав, цветов и легкими фруктовыми оттенками. Он может варьироваться в зависимости от условий хранения и времени выдержки. Вкус Е Шэн Цзы Ча мягкий и освежающий, с характерной сладостью и легкой терпкостью. Он может иметь нотки зеленого горошка, свежих трав и даже легкие цветочные оттенки. Послевкусие обычно легкое и приятное.' },
          { name: 'Озеро Солнца и Луны, Тайвань', image: '../../../красный озера солнца и луны.jpg', description: 'Аромат чая богат и многогранен. В нем можно уловить ноты вяленой вишни, зеленого яблока, а также пряные коричные оттенки. При заваривании аромат становится более интенсивным, с добавлением бисквитных и фруктовых нот. Вкус чая полнотелый и насыщенный, с яркими фруктовыми нотами и сладостью. Он может напоминать свежевыпеченный вишневый пирог с легкими шоколадными и карамельными оттенками. Послевкусие долгое и бархатистое.' },
          { name: 'Дун фан Мэй Жэнь', image: '../../../Дун-Фан-Мэй-Жэнь01-1.jpg', description: 'Аромат чая легкий и цветочный, с нотами семян подсолнечника и кунжута. При заваривании появляются акценты меда, ягод и фруктов, таких как малина и дыня. Вкус чая сладкий и шелковистый, с доминирующими медовыми и ягодными нотами. С каждым новым проливом вкус меняется, проявляя легкую горчинку и тягучесть на последних заварках.' },
        ],
      },
      { 
        name: 'Желтый', 
        image: 'https://via.placeholder.com/100', 
        description: 'Описание Желтого чая.', 
        teas: [
          { name: 'Цзюнь Шань Инь Чжэнь', image: '../../../цзинь шань инь чжэнь.jpg', description: 'Аромат этого чая свежий и легкий, с нотами цветов, трав и легкими фруктовыми оттенками. Он может варьироваться в зависимости от условий хранения и времени выдержки. Вкус Цзюнь Шань Инь Чжэнь мягкий и освежающий, с характерной сладостью и легкой терпкостью. Он может иметь нотки дыни, персика и даже легкие цветочные оттенки. Послевкусие обычно легкое и приятное.' },
        ],
      },
      { 
        name: 'Зеленый', 
        image: 'https://via.placeholder.com/100', 
        description: 'Описание Белого чая.', 
        teas : [
          { name: 'Мао фэн', image: '../../../мао фэн.jpg', description: 'Аромат этого чая свежий и яркий, с нотами трав, цветов и легкими фруктовыми оттенками. Он может варьироваться в зависимости от условий хранения и времени выдержки. Вкус Мао Фэн мягкий и освежающий, с характерной сладостью и легкой терпкостью. Он может иметь нотки зеленого горошка, свежих трав и даже легкие цветочные оттенки. Послевкусие обычно легкое и приятное.' },
        ],
      },
      { 
        name: 'Белый', 
        image: 'https://via.placeholder.com/100', 
        description: 'Описание Белого чая.', 
        teas : [
          { name: 'Серебрянные иглы', image: '../../../сер иглы.jpg', description: 'Аромат этого чая свежий и легкий, с нотами цветов, трав и легкими фруктовыми оттенками. Он может варьироваться в зависимости от условий хранения и времени выдержки. Вкус Серебряных игл мягкий и освежающий, с характерной сладостью и легкой терпкостью. Он может иметь нотки дыни, персика и даже легкие цветочные оттенки. Послевкусие обычно легкое и приятное.' },
        ],
      },
    ],
  },
  Улуны: {
    подкатегории: [
      { 
        name: 'Светлый улун', 
        image: 'https://via.placeholder.com/100', 
        description: 'Описание Светлого улуна.', 
        teas: [
            { name: 'Тегуаньинь Чжэй Вэй(на углях)', image: '../../../тг гретая.jpg', description: 'Аромат этого чая богатый и многослойный. В нем можно уловить нотки жареных орехов, карамели, а также легкие цветочные и фруктовые оттенки. Обжарка на углях придает чаю особую глубину и сложность. Вкус Тегуаньинь Чжэй Вэй насыщенный и округлый, с характерной сладостью и легкой терпкостью. Он может иметь нотки меда, жареных орехов и даже легкие карамельные оттенки. Послевкусие обычно длительное и приятное.' },
            { name: 'Тегуаньинь', image: '../../../тг.jpg', description: 'Аромат этого чая богатый и многослойный. В нем можно уловить цветочные ноты, такие как орхидеи, а также легкие фруктовые и сладкие оттенки. Аромат может варьироваться в зависимости от метода обработки и времени сбора. Вкус Тегуаньинь обычно мягкий и округлый, с характерной сладостью и легкой терпкостью. Он может иметь нотки меда, жареных орехов и даже легкие карамельные оттенки. Послевкусие обычно длительное и приятное.' },
            { name: 'Дун Дин', image: '../../../дун дин.jpg', description: 'Дун Дин имеет средний уровень прогрева, что позволяет сохранить ноты огня и поджаренной хлебной корочки. Вкус характеризуется прямолинейной карамельной сладостью с травянистыми оттенками, а цветочно-фруктовые ноты раскрываются недостаточно.' },
          ],
    },
      { 
        name: 'Темный улун', 
        image: 'https://via.placeholder.com/100', 
        description: 'Описание Темного улуна.', 
        teas: [
            { name: 'Да Хун Пао', image: '../../../дхп.jpg', description: 'Аромат этого чая богатый и многослойный. В нем можно уловить нотки жареных орехов, карамели, а также легкие цветочные и фруктовые оттенки. Обжарка придает чаю особую глубину и сложность. Вкус Да Хун Пао насыщенный и округлый, с характерной сладостью и легкой терпкостью. Он может иметь нотки шоколада, карамели и даже легкие пряные оттенки. Послевкусие обычно длительное и приятное.' },
            { name: 'Шуй Сян', image: '../../../шуй сян.jpg', description: 'Аромат этого чая богатый и многослойный. В нем можно уловить цветочные ноты, такие как орхидеи, а также легкие фруктовые и сладкие оттенки. Аромат может варьироваться в зависимости от метода обработки и времени сбора. Вкус Шуй Сян обычно мягкий и округлый, с характерной сладостью и легкой терпкостью. Он может иметь нотки меда, жареных орехов и даже легкие карамельные оттенки. Послевкусие обычно длительное и приятное.' },
            { name: 'Лао Ча Ван', image: '../../../лао ча ван.jpg', description: 'Аромат этого чая богатый и многослойный. В нем можно уловить землистые, древесные и сладкие ноты, а также легкие фруктовые оттенки. Аромат может варьироваться в зависимости от времени хранения и условий. Вкус Лао Ча Ван насыщенный и глубокий, с характерной сладостью и легкой терпкостью. Он может иметь нотки шоколада, карамели, орехов и даже легкие пряные оттенки. Послевкусие обычно длительное и приятное.' },
          ],
    },
      { 
        name: 'Гуандунский улун', 
        image: 'https://via.placeholder.com/100', 
        description: 'Описание Гуандунский улун.', 
        teas : [
            { name: 'Дань Цун', image: '../../../дань цун.jpg', description: 'Аромат этого чая богатый и многослойный. В нем можно уловить цветочные ноты, такие как орхидеи, а также легкие фруктовые и сладкие оттенки. Аромат может варьироваться в зависимости от метода обработки и времени сбора. Вкус Дань Цун обычно мягкий и округлый, с характерной сладостью и легкой терпкостью. Он может иметь нотки меда, жареных орехов и даже легкие карамельные оттенки. Послевкусие обычно длительное и приятное.'}
        ]
    },
    ],
  },
  Габа: {
    подкатегории: [
      { name: 'Габа', image: 'https://via.placeholder.com/100', description: 'Описание Габы.', teas : [
        { name: 'Габа Рубиновая', image: '../../../габа рубиновая.jpg', description: 'Аромат этого чая насыщенный и многослойный. В нем можно уловить сладкие и фруктовые ноты, а также легкие цветочные и травяные оттенки. Аромат может варьироваться в зависимости от метода обработки и времени сбора. Вкус Габа Рубиновой обычно мягкий и округлый, с характерной сладостью и легкой терпкостью. Он может иметь нотки меда, карамели и даже легкие пряные оттенки. Послевкусие обычно длительное и приятное.'}
      ] },
    ],
  },
};

const TeaBlock = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSubCategory, setCurrentSubCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTeaDetail, setSelectedTeaDetail] = useState(null);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setCurrentSubCategory(null);
  };

  const handleSubCategoryClick = (subCategory) => {
    setCurrentSubCategory(subCategory);
  };

  const handleTeaClick = (tea) => {
    setSelectedTeaDetail(tea);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTeaDetail(null);
  };

  const handleBackClick = () => {
    if (currentSubCategory) {
      setCurrentSubCategory(null);
    } else {
      setCurrentCategory(null);
    }
  };

  const renderTeaCards = (data) => {
    return data.map((tea) => (
      <div key={tea.name} className="tea-card">
        <img src={tea.image} alt={tea.name} />
        <h4>{tea.name}</h4>
        <button className="btn_goods"onClick={() => handleTeaClick(tea)}>Подробнее</button>
      </div>
    ));
  };

  return (
  <div className='tea' id="tea" >
    <div className="tea-block">
      {!currentCategory ? (
        <div className="categories">
          <h2 id="tea">Выберите категорию чая</h2>
          {Object.keys(teaData).map((category) => (
            <button className="btn_goods" key={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          ))}
        </div>
      ) : (
        <div className="subcategories">
          <h2>{currentCategory}</h2>
          <button className='btn_goods' onClick={handleBackClick}>Назад</button>
          <div className="subcategories-list">
            {teaData[currentCategory].подкатегории.map((subCategory) => {
              if (subCategory.name === 'Габа') {
                return null;
              }
              return (
                <button className='btn_goods' key={subCategory.name} onClick={() => handleSubCategoryClick(subCategory)}>
                  {subCategory.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

        <div className="tea-cards">
          <div className="tea-cards-container">
            {currentCategory && !currentSubCategory
              ? renderTeaCards(teaData[currentCategory].подкатегории.flatMap(sub => sub.teas || []))
              : currentSubCategory
              ? renderTeaCards(currentSubCategory.teas || [])
              : Object.values(teaData).flatMap(category => category.подкатегории).flatMap(sub => sub.teas || []).map(tea => (
                <div key={tea.name} className="tea-card">
                  <img src={tea.image} alt={tea.name} />
                  <h4>{tea.name}</h4>
                  <button className="btn_goods" onClick={() => handleTeaClick(tea)}>Подробнее</button>
                </div>
              ))}
          </div>
        </div>
      </div>
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            {selectedTeaDetail && (
              <>
                <h2>{selectedTeaDetail.name}</h2>
                <img className="modal-image" src={selectedTeaDetail.image} alt={selectedTeaDetail.name} />
                <p>{selectedTeaDetail.description}</p>
              </>
            )}
          </div>
        </div>
      </CSSTransition>
    </div> 
  );
};
export default TeaBlock;