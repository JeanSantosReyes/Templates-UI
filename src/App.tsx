import ScrollTop from "./components/scrolltop/ScrollTop"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"

export const App = () => {
  return (
    <AppTheme>
      <ScrollTop>
        <AppRouter />
      </ScrollTop>
    </AppTheme>
  )
}
