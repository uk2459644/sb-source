
export const ColoumnElement = `<div class="columns">
<div class="column">
  First column
</div>
<div class="column">
  Second column
</div>
</div>`;

export const ImageElement = `<figure class="image is-128x128">
<img src="https://bulma.io/images/placeholders/128x128.png">
</figure>`;

export const ProgressElement=`<progress class="progress" value="15" max="100">15%</progress>`;

export const TagElement=`<span class="tag">
Tag label
</span>`;

export const BreadCrumbElement=`<nav class="breadcrumb" aria-label="breadcrumbs">
<ul>
  <li><a href="#">Bulma</a></li>
  <li><a href="#">Documentation</a></li>
  <li><a href="#">Components</a></li>
  <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
</ul>
</nav>`;

export const CardElement=`<div class="card">
<div class="card-image">
  <figure class="image is-4by3">
    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
  </figure>
</div>
<div class="card-content">
  <div class="media">
    <div class="media-left">
      <figure class="image is-48x48">
        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="media-content">
      <p class="title is-4">John Smith</p>
      <p class="subtitle is-6">@johnsmith</p>
    </div>
  </div>

  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
    <a href="#">#css</a> <a href="#">#responsive</a>
    <br>
    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  </div>
</div>
</div>`;

export const DropDownElement=`<div class="dropdown is-active">
<div class="dropdown-trigger">
  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
    <span>Dropdown button</span>
    <span class="icon is-small">
      <i class="fas fa-angle-down" aria-hidden="true"></i>
    </span>
  </button>
</div>
<div class="dropdown-menu" id="dropdown-menu" role="menu">
  <div class="dropdown-content">
    <a href="#" class="dropdown-item">
      Dropdown item
    </a>
    <a class="dropdown-item">
      Other dropdown item
    </a>
    <a href="#" class="dropdown-item is-active">
      Active dropdown item
    </a>
    <a href="#" class="dropdown-item">
      Other dropdown item
    </a>
    <hr class="dropdown-divider">
    <a href="#" class="dropdown-item">
      With a divider
    </a>
  </div>
</div>
</div>`;

export const MessageElement=`<article class="message">
<div class="message-header">
  <p>Hello World</p>
  <button class="delete" aria-label="delete"></button>
</div>
<div class="message-body">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
</div>
</article>`;

export const ModalElement=`<div class="modal">
<div class="modal-background"></div>
<div class="modal-content">
  <!-- Any other Bulma elements you want -->
</div>
<button class="modal-close is-large" aria-label="close"></button>
</div>`;

export const NavBarElement=`
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>`;

export const PaginationElement=`<nav class="pagination" role="navigation" aria-label="pagination">
<a class="pagination-previous">Previous</a>
<a class="pagination-next">Next page</a>
<ul class="pagination-list">
  <li>
    <a class="pagination-link" aria-label="Goto page 1">1</a>
  </li>
  <li>
    <span class="pagination-ellipsis">&hellip;</span>
  </li>
  <li>
    <a class="pagination-link" aria-label="Goto page 45">45</a>
  </li>
  <li>
    <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
  </li>
  <li>
    <a class="pagination-link" aria-label="Goto page 47">47</a>
  </li>
  <li>
    <span class="pagination-ellipsis">&hellip;</span>
  </li>
  <li>
    <a class="pagination-link" aria-label="Goto page 86">86</a>
  </li>
</ul>
</nav>`;

export const PanelElement=`<nav class="panel">
<p class="panel-heading">
  Repositories
</p>
<div class="panel-block">
  <p class="control has-icons-left">
    <input class="input" type="text" placeholder="Search">
    <span class="icon is-left">
      <i class="fas fa-search" aria-hidden="true"></i>
    </span>
  </p>
</div>
<p class="panel-tabs">
  <a class="is-active">All</a>
  <a>Public</a>
  <a>Private</a>
  <a>Sources</a>
  <a>Forks</a>
</p>
<a class="panel-block is-active">
  <span class="panel-icon">
    <i class="fas fa-book" aria-hidden="true"></i>
  </span>
  bulma
</a>
<a class="panel-block">
  <span class="panel-icon">
    <i class="fas fa-book" aria-hidden="true"></i>
  </span>
  marksheet
</a>
<a class="panel-block">
  <span class="panel-icon">
    <i class="fas fa-book" aria-hidden="true"></i>
  </span>
  minireset.css
</a>
<a class="panel-block">
  <span class="panel-icon">
    <i class="fas fa-book" aria-hidden="true"></i>
  </span>
  jgthms.github.io
</a>
<a class="panel-block">
  <span class="panel-icon">
    <i class="fas fa-code-branch" aria-hidden="true"></i>
  </span>
  daniellowtw/infboard
</a>
<a class="panel-block">
  <span class="panel-icon">
    <i class="fas fa-code-branch" aria-hidden="true"></i>
  </span>
  mojs
</a>
<label class="panel-block">
  <input type="checkbox">
  remember me
</label>
<div class="panel-block">
  <button class="button is-link is-outlined is-fullwidth">
    Reset all filters
  </button>
</div>
</nav>`;

export const TabsElement=`
<div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>`;

/**
 * Form elements
 * 
 */
export const InputElement=`<input class="input" type="text" placeholder="Text input">`;
export const TextAreaElement=`<textarea class="textarea" placeholder="e.g. Hello world"></textarea>`;
export const SelectElement=`<div class="select">
<select>
  <option>Select dropdown</option>
  <option>With options</option>
</select>
</div>`;

export const CheckBoxElement=`<label class="checkbox">
<input type="checkbox">
Remember me
</label>`;

export const RadioElement=`<div class="control">
<label class="radio">
  <input type="radio" name="answer">
  Yes
</label>
</div>`;

export const FileElement=`<div class="file">
<label class="file-label">
  <input class="file-input" type="file" name="resume">
  <span class="file-cta">
    <span class="file-icon">
      <i class="fas fa-upload"></i>
    </span>
    <span class="file-label">
      Choose a file???
    </span>
  </span>
</label>
</div>`;

/**
 * Layout Element
 * 
 */

export const HeroElement=`<section class="hero">
<div class="hero-body">
  <p class="title">
    Hero title
  </p>
  <p class="subtitle">
    Hero subtitle
  </p>
</div>
</section>`;

export const SectionElement=`<section class="section">
<h1 class="title">Section</h1>
<h2 class="subtitle">
  A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
</h2>
</section>`;

export const FooterElement=`<footer class="footer">
<div class="content has-text-centered">
  <p>
    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
  </p>
</div>
</footer>`;

export const TileElement=`<div class="tile is-ancestor">
<div class="tile is-vertical is-8">
  <div class="tile">
    <div class="tile is-parent is-vertical">
      <article class="tile is-child notification is-primary">
        <p class="title">Vertical...</p>
        <p class="subtitle">Top tile</p>
      </article>
      <article class="tile is-child notification is-warning">
        <p class="title">...tiles</p>
        <p class="subtitle">Bottom tile</p>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-info">
        <p class="title">Middle tile</p>
        <p class="subtitle">With an image</p>
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/640x480.png">
        </figure>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-danger">
      <p class="title">Wide tile</p>
      <p class="subtitle">Aligned with the right tile</p>
      <div class="content">
        <!-- Content -->
      </div>
    </article>
  </div>
</div>
<div class="tile is-parent">
  <article class="tile is-child notification is-success">
    <div class="content">
      <p class="title">Tall tile</p>
      <p class="subtitle">With even more content</p>
      <div class="content">
        <!-- Content -->
      </div>
    </div>
  </article>
</div>
</div>`;




