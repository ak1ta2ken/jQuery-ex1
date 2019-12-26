$(function() {
  $('.tab li').click(function(){
    // すべてのタブからselectクラスを取り除く
    $('.tab li').removeClass('select');
    // クリックされたタブを取得
    $(this).addClass('select');
    // `<ul class="content">`内のすべての`liタグ`を取得
    $('.conetnt li').addClass('hide');
    // 何番目の子要素か調べる
    let index = $('.tab li').index($(this));
    // ↑で取得したindex値から該当するコンテンツを取得
    $('.content li').eq(index).removeClass('hide');
    // console.log(index);
  });
});
