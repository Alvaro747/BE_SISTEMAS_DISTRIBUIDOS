export class Responses {
  static success(res, data, status = 200, message = "solicitud exitosa") {
    res.status(status).json({
      data,
      success: true,
      message,
    });
  }

  static error(res, status = 500, message = "error en la solicitud") {
    res.status(status).json({
      success: false,
      message,
      data: null,
    });
  }
}
