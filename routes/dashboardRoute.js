import Elysia from "elysia";
import { dashboardController } from "../controller/dashboard.controller";
import { middleware } from "../middleware/auth.middleware";

export const dashboardRoute = new Elysia({ prefix: "/dashboard" })
  // all avg
  .get("/all-avg", dashboardController.getAll_AVG, {
    beforeHandle: middleware.auth,
  })
  // chart bar data
  .get("/chart-bar-data", dashboardController.chart_bar_data, {
    beforeHandle: middleware.auth,
  })
  // pie chart data
  .get("/pie-chart-data", dashboardController.pie_chart_data, {
    beforeHandle: middleware.auth,
  })

  // population job
  .get("/population-job", dashboardController.population_job, {
    beforeHandle: middleware.auth,
  })
  // most live province
  .get("/most-live-province", dashboardController.most_live_province, {
    beforeHandle: middleware.auth,
  })
  // get workrate percent
  .get("/workrate-percent", dashboardController.workrate_percent, {
    beforeHandle: middleware.auth,
  })
  // get null workExpreriences
  .get("/no-work-data", dashboardController.no_work_data, {
    beforeHandle: middleware.auth,
  })
  // get work unemployed alumni
  .get("/list/work-unemployed", dashboardController.list_work_unemployed, {
    beforeHandle: middleware.auth,
  })
  .get("/list/alumni-salary", dashboardController.list_alumni_salary, {
    beforeHandle: middleware.auth,
  })
  // work list
  .get("/list/alumni-work", dashboardController.list_work, {
    beforeHandle: middleware.auth,
  })
  // no work data
  .get("/list/no-work-data", dashboardController.list_no_work_data, {
    beforeHandle: middleware.auth,
  })
  // get work-place-rate
  .get("/work-place-rate", dashboardController.work_place_rate, {
    beforeHandle: middleware.auth,
  })
  // get master-degree-list
  .get("/list/master-degree-list", dashboardController.master_degree_list, {
    beforeHandle: middleware.auth,
  })
  // get work other country list
  .get(
    "/list/work-other-country-list",
    dashboardController.work_other_country_list,
    { beforeHandle: middleware.auth }
  )
  // get most salary alumni
  .get("/name/most-salary", dashboardController.most_salary_byname, {
    beforeHandle: middleware.auth,
  })
  // get studu other country list
  .get(
    "/list/study-other-country",
    dashboardController.study_other_country_list,
    { beforeHandle: middleware.auth }
  );
