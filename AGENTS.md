<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Villa Madera site code (App.tsx, site-routes.ts, components/, pages/) is rendered by src/routes/index.tsx and the splat src/routes/$.tsx via SitePage; why: the imported site resolves locale/page from the URL itself.
- Styling uses the legacy tailwind.config.ts via @config plus src/styles/tokens.css and global.css; why: keeps the original design tokens unchanged.
