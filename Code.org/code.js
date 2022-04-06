var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["26be4492-c238-416c-b299-6245529af17d","675aaae9-b07f-487f-988b-d3c73d4b29fa","508ddc20-ee52-4f55-9712-8aeef995d439"],"propsByKey":{"26be4492-c238-416c-b299-6245529af17d":{"name":"cloud_1","sourceUrl":"assets/api/v1/animation-library/gamelab/SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh/category_icons/cloud.png","frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":2,"version":"SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh/category_icons/cloud.png"},"675aaae9-b07f-487f-988b-d3c73d4b29fa":{"name":"pieceBlack_multi04_1","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"hOx9BZxjwC4K8gN.RV_0PEt67lBOTMKN","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/675aaae9-b07f-487f-988b-d3c73d4b29fa.png"},"508ddc20-ee52-4f55-9712-8aeef995d439":{"name":"house_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ueHqxid.3jVhJd7xpzXxddJcYhaQZznG/category_buildings/house_03.png","frameSize":{"x":332,"y":280},"frameCount":1,"looping":true,"frameDelay":2,"version":"ueHqxid.3jVhJd7xpzXxddJcYhaQZznG","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":280},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ueHqxid.3jVhJd7xpzXxddJcYhaQZznG/category_buildings/house_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = true;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

background("blue");
var cloud1 = createSprite(100, 50);
cloud1.setAnimation("cloud_1");
var cloud2 = createSprite(300, 50);
cloud2.setAnimation("cloud_1");
var House = createSprite(0, 275);
House.setAnimation("house_03_1");
var peple = createSprite(200, 350);
peple.setAnimation("pieceBlack_multi04_1");
drawSprites();
fill("red");
rect(100, 100, 50, 50);
fill("yellow");
ellipse(200, 200, 25, 25);
fill("black");
textFont("Ariel");
textSize(15);
text("Oddities In Multiversal Space", 0, 15, 100, 100);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
