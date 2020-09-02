const characters = document.querySelector('.characters');
const charJs = document.querySelectorAll('.charJs');
const titleJs = document.querySelector('.titleJs');
const paragraphJs = document.querySelector('.paragraphJs');
const imgJs = document.querySelector('.imgJs');
const char = [
    {
        title: 'Michael Scott',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices. Nunc sed id semper risus. Mi sit amet mauris commodo quis imperdiet massa. Morbi tristique senectus et netus. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Pulvinar'
    },

    {
        title: 'Jim Halpert',
        text: 'Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Dolor magna eget est lorem ipsum. Tellus in metus vulputate eu scelerisque. Nibh cras pulvinar mattis nunc sed. Egestas integer eget aliquet nibh praesent tristique magna sit. Sem fringilla ut morbi tincidunt augue. Elit at imperdiet dui accumsan sit amet nulla. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Iaculis nunc sed augue lacus viverra.'
    },

    {
        title: 'Dwight Schrute',
        text: 'Lobortis elementum nibh tellus molestie nunc non blandit. Tellus cras adipiscing enim eu turpis egestas. Egestas fringilla phasellus faucibus scelerisque. Ac turpis egestas integer eget aliquet nibh praesent tristique. Laoreet sit amet cursus sit amet. Viverra tellus in hac habitasse platea dictumst. Leo duis ut diam quam. Sit amet cursus sit amet dictum sit.'
    },

    {
        title: 'Pam Beesly',
        text: 'Amet consectetur adipiscing elit duis tristique. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Non consectetur a erat nam at lectus urna duis.'
    },

    {
        title: 'Stanley Hudson',
        text: 'Tristique risus nec feugiat in. A erat nam at lectus urna. Sed euismod nisi porta lorem mollis aliquam ut porttitor. In nulla posuere sollicitudin aliquam ultrices. Vehicula ipsum a arcu cursus. Dictum fusce ut placerat orci nulla. Massa sed elementum tempus egestas sed sed. Volutpat odio facilisis mauris sit amet massa vitae.'
    },

    {
        title: 'Andy Bernard',
        text: 'Vivamus arcu felis bibendum ut tristique et egestas. Dignissim convallis aenean et tortor at risus. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Elementum facilisis leo vel fringilla est ullamcorper eget. Et ligula ullamcorper malesuada proin. Lobortis elementum nibh tellus molestie nunc non blandit massa enim.'
    },

    {
        title: 'Kelly Kapoor',
        text: 'Justo laoreet sit amet cursus sit amet. Tortor condimentum lacinia quis vel eros donec ac. In eu mi bibendum neque egestas. Tincidunt praesent semper feugiat nibh sed. Vitae congue mauris rhoncus aenean vel elit. Pellentesque id nibh tortor id aliquet. Faucibus interdum posuere lorem ipsum dolor sit. Arcu non sodales neque sodales.'
    },

    {
        title: 'Ryan Howard',
        text: 'Nibh mauris cursus mattis molestie a iaculis. Quis imperdiet massa tincidunt nunc pulvinar sapien. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Eu non diam phasellus vestibulum lorem sed risus ultricies. Sed sed risus pretium quam. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Velit egestas dui id ornare arcu odio.'
    },

    {
        title: 'Oscar Martinez',
        text: 'Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Egestas congue quisque egestas diam in arcu cursus. Duis ut diam quam nulla porttitor massa id. Libero volutpat sed cras ornare arcu dui vivamus arcu. Purus non enim praesent elementum facilisis. Pretium viverra suspendisse potenti nullam ac tortor. Adipiscing elit ut aliquam purus sit amet luctus.'
    },

    {
        title: 'Darryl Philbin',
        text: 'Non consectetur a erat nam at lectus. Ultrices sagittis orci a scelerisque purus semper eget duis. Tristique senectus et netus et. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Laoreet non curabitur gravida arcu ac tortor dignissim. Leo a diam sollicitudin tempor id. Egestas dui id ornare arcu. Diam sollicitudin tempor id eu nisl.'
    },

    {
        title: 'Angela Martin',
        text: 'Sit amet dictum sit amet. Dictum non consectetur a erat nam at lectus urna. Pulvinar mattis nunc sed blandit. Felis eget velit aliquet sagittis id. Id cursus metus aliquam eleifend mi in nulla posuere. Maecenas volutpat blandit aliquam etiam erat velit. Lectus sit amet est placerat in. Elementum eu facilisis sed odio morbi quis commodo odio.'
    },

    {
        title: 'Creed Bratton',
        text: 'Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Mi bibendum neque egestas congue quisque egestas diam in. Massa ultricies mi quis hendrerit dolor magna. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Facilisi nullam vehicula ipsum a arcu cursus. Rhoncus dolor purus non enim praesent elementum. Integer eget aliquet nibh praesent tristique magna sit.'
    },

    {
        title: 'Erin Hannon',
        text: 'Commodo elit at imperdiet dui accumsan. Risus nec feugiat in fermentum posuere urna. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Tristique senectus et netus et malesuada fames ac turpis. Viverra maecenas accumsan lacus vel facilisis volutpat. Orci ac auctor augue mauris augue neque gravida in fermentum. Felis bibendum ut tristique et. Vitae suscipit tellus mauris a diam maecenas sed enim ut.'
    },

    {
        title: 'Meridith Palmer',
        text: 'Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Tempus imperdiet nulla malesuada pellentesque elit. Nisl tincidunt eget nullam non. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Faucibus vitae aliquet nec ullamcorper sit amet. Sed augue lacus viverra vitae congue eu consequat ac.'
    },

    {
        title: 'Kevin Malone',
        text: 'Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Nunc mattis enim ut tellus elementum sagittis vitae. Blandit cursus risus at ultrices. Cursus euismod quis viverra nibh cras pulvinar mattis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Quisque non tellus orci ac auctor augue mauris augue. Adipiscing bibendum est ultricies integer quis auctor.'
    }
];

for(let i = 0; i < charJs.length; i++) {
    charJs[i].addEventListener('click', charInfo);
    
    function charInfo(e) {
        titleJs.textContent = char[i].title;
        paragraphJs.textContent = char[i].text;
    }
}