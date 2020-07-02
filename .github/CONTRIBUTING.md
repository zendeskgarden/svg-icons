# Contributing to Garden

Keen to contribute to Garden? We're stoked to have you join us. You may
find that opening an
[issue](https://github.com/zendeskgarden/svg-icons/issues) is the best
way to get a conversation started. When you're ready to submit a pull
request, follow the [steps](#pull-request-workflow) below. We follow a
[code of conduct](CODE_OF_CONDUCT.md) as our guide for community
behavior.

## Versioning Workflow

Garden follows [semantic versioning](https://semver.org/). We release
patch versions for bugfixes, minor versions for new features, and major
versions for any breaking changes.

The [pull request workflow](#pull-request-workflow) along with the [PR
template](PULL_REQUEST_TEMPLATE.md) will help us determine how to
version your contributions.

All changes are recorded in the [changelog](../CHANGELOG.md) file.

## Development Workflow

Before you start, be sure [yarn](https://yarnpkg.com/en/) is installed
on your system. After you clone this repo, run `yarn` to install
dependencies needed for development. After installation, the following
commands are available:

* `yarn start` to launch the SVG icon demo server with live reload
  – source files will be watched for changes.
* `yarn test` to run package tests.
* `yarn lint` to enforce consistent code conventions. Note this is run
  as a git `pre-commit` hook.
* `yarn format` to optimize SVGs and enforce code style with opinionated
  formats. Note this is run as a git `pre-commit` hook.
* `yarn build` to rebuild the SVG spritemap symbol distribution and
  update SVG demo pages. The build runs as part of the initial install.

## Pull Request Workflow

1. Fork the repo and create a branch. Format your branch name as
   `username/verb-noun`.
1. If you haven't yet, get comfortable with the [development
   environment](#development-workflow).
1. Regularly `git commit` locally and `git push` to the remote branch.
   Use whatever casual commit messaging you find suitable. We'll help
   you apply an appropriate squashed [conventional
   commit](https://conventionalcommits.org/) message when it's time to
   merge to the main branch.
1. If you are adding new SVG icons, optimize them following the
   [workflow](svg-optimization-workflow) below.
1. If your changes result in a major modification, be sure all
   documentation is up-to-date.
1. When your branch is ready, open a new pull request via GitHub.
   The repo [PR template](PULL_REQUEST_TEMPLATE.md) will guide you
   toward describing your contribution in a format that is ultimately
   suitable for a structured conventional commit (used to automatically
   advance the published package version).
1. Every PR must pass CI checks and receive at least one :+1: to be
   considered for merge.
1. Garden
   [maintainers](https://github.com/orgs/zendeskgarden/teams/maintainers)
   will manage the squashed merge to the main branch, using your PR title and
   description as the scope, description, and body for a conventional
   commit.

## SVG Optimization Workflow

Get SVG designs from Illustrator (not Sketch). Ensure all visible
`stroke` and `fill` properties are colored `red`. Inspect the source:

1. Ensure the `viewBox` is clean. It should contain a "normal" value
   like `0 0 64 64` (where this SVG has been right-sized for a maximum
   64x64 rendering). If the viewBox looks weird (due to a
   [bug](http://graphicdesign.stackexchange.com/questions/39505/illustrator-exporting-svg-viewbox-doesnt-match-artboard-size)
   with the Illustrator artboard), create a new artboard and re-export
   the SVG.
1. Ensure specific shapes are represented by the best possible SVG
   elements (i.e. prefer `<circle>` vs. a `<path>` in the shape of a
   circle).
1. Run `yarn format` to optimize SVGs via
   [svgo](https://www.npmjs.com/package/svgo).
1. Edit the optimized SVG source file.
    1. Swap out any leftover `<defs>` and `<use>` elements, eliminating
       all internal xlink and references.
    1. Remove any leftover `xmlns:xlink` and `data-*` attributes – we
       don't use these.
    1. Attempt to remove `fill-rule="evenodd"` – it’s usually not
       needed.
    1. Remove unnecessary `stroke-linejoin` attributes where there are
       no lines to join.
    1. Remove unnecessary `stroke-linecap` attributes where there are no
       lines to cap.
    1. Make color corrections.
        1. For monochrome SVGs, make sure all foreground fill and
           stroke attributes are set to `currentColor`. This allows
           an inline icon to receive the font color of it's parent
           element. When optimal, combine these attributes under a SVG
           [`<g>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g)
           element.
        1. For two-tone SVGs (such as Zendesk's relationshapes) set
           the color foreground to `currentColor` and leave the neutral
           foreground open to receive styling via the CSS fill property
           (see the
           [hack](https://css-tricks.com/lodge/svg/21-get-two-colors-use/)
           for details).
1. Add SVG `width` and `height` attributes that correspond to the
   `viewBox` – for bulletproof cross-browser scaling.

## License

By contributing to Garden, you agree that your contributions will be
licensed under the [Apache License, Version 2.0](../LICENSE.md).
